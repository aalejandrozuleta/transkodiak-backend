import { vehicleCompanyFindByNameInterface } from './interface/vehicleCompanyFindByName';
import { FieldPacket } from 'mysql2';
import RegisterDto from '@dto/vehicleCompany/register';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/vehicleCompany/register';
import { ERROR_MESSAGE } from './utils/messagesError';
import { sendWelcomeEmail } from '@helpers/mail/welcome';

export const registerService = async (userData: RegisterDto) => {
  // Verificar si ya existe una empresa con el mismo nombre
  const [existingName]: [vehicleCompanyFindByNameInterface[], FieldPacket[]] =
    await RegisterRepository.findVehicleCompanyByName(userData).catch(
      (error) => {
        console.log(error);
        throw new Error(ERROR_MESSAGE.DB_ERROR);
      },
    );

  const result = existingName[0];

  if (result.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING);
  }

  // Intentar hashear la contraseña
  const passwordHash = await hashPassword(userData.password).catch(
    (hashError) => {
      console.log(hashError);
      throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
    },
  );
  userData.password = passwordHash;

  await sendWelcomeEmail(userData.email);

  // Intentar registrar la empresa en la base de datos
  return await RegisterRepository.registerVehicleCompany(userData).catch(
    (dbError) => {
      console.log(dbError);
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
