import RegisterDto from '@dto/vehicleCompany/register';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/vehicleCompany/register';
import { ERROR_MESSAGE } from './utils/messagesError';

export const registerService = async (userData: RegisterDto) => {
  // Verificar si ya existe una empresa con el mismo nombre
  const [existingName]: any = await RegisterRepository.findVehicleCompanyByName(userData);
  console.log(existingName);
  

  if (existingName[0].length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_NAME);
  }

  // Intentar hashear la contraseña
  const passwordHash = await hashPassword(userData.password).catch((hashError) => {
    throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
  });
  userData.password = passwordHash;

  // Intentar registrar la empresa en la base de datos
  return await RegisterRepository.registerVehicleCompany(userData).catch((dbError) => {
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  });
};
