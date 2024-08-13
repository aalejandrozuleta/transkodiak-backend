import { vehicleCompanyFindByNameInterface } from './interface/vehicleCompanyFindByName';
import { FieldPacket } from 'mysql2';
import RegisterDto from '@dto/vehicleCompany/register';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/vehicleCompany/register';
import { ERROR_MESSAGE } from './utils/messagesError';
import { sendWelcomeEmail } from '@helpers/mail/welcome';
import { searchEmail } from '@interfaces/general/searchEmail';

export const registerService = async (userData: RegisterDto) => {
  const [existingEmail]: [searchEmail[], FieldPacket[]] =
    await RegisterRepository.searchEmail(userData).catch((error) => {
      console.error(error);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    });

  // Verificar si ya existe una empresa con el mismo nombre
  const [existingName]: [vehicleCompanyFindByNameInterface[], FieldPacket[]] =
    await RegisterRepository.findVehicleCompanyByName(userData).catch(
      (error) => {
        console.error(error);
        throw new Error(ERROR_MESSAGE.DB_ERROR);
      },
    );

  const resultName = existingName[0];
  const resultEmail = existingEmail[0];

  // si el correo electrónico ya existe, lanzar una excepción
  if (resultEmail.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_EMAIL);
  }

  if (resultName.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_NAME);
  }

  // Intentar hashear la contraseña
  const passwordHash = await hashPassword(userData.password).catch(
    (hashError) => {
      console.error(hashError);
      throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
    },
  );
  userData.password = passwordHash;

  await sendWelcomeEmail(userData.email);

  // Intentar registrar la empresa en la base de datos
  return await RegisterRepository.registerVehicleCompany(userData).catch(
    (dbError) => {
      console.error(dbError);
      // Capturar error de entrada duplicada y personalizar el mensaje
      if (dbError.code === 'ER_DUP_ENTRY') {
        if (dbError.message.includes('email')) {
          throw new Error(ERROR_MESSAGE.DUPLICATE_EMAIL);
        } else if (dbError.message.includes('name')) {
          throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
        } else if (dbError.message.includes('phone')) {
          throw new Error(ERROR_MESSAGE.DUPLICATE_PHONE);
        } else if (dbError.message.includes('PRIMARY')) {
          throw new Error(ERROR_MESSAGE.DUPLICATE_NIT);
        }
      }
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
