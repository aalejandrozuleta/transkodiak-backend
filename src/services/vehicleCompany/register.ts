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
    await RegisterRepository.findVehicleCompanyByName(userData);

  console.log(existingName);

  const result = existingName[0];

  console.log(result);

  if (result.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_NAME);
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
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
