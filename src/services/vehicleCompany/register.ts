import RegisterDto from '@dto/vehicleCompany/register';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/vehicleCompany/register';
import { ERROR_MESSAGE } from './utils/messagesError';

export const registerService = async (userData: RegisterDto) => {
  try {
    // Verificar si ya existe una empresa con el mismo nombre
    const [existingName]: any =
      await RegisterRepository.findVehicleCompanyByName(userData);

    if (existingName[0].length > 0) {
      throw new Error(ERROR_MESSAGE.EXISTING_NAME);
    }

    // Intentar hashear la contraseña
    try {
      const passwordHash = await hashPassword(userData.password);
      userData.password = passwordHash;
    } catch (hashError) {
      throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
    }

    // Intentar registrar la empresa en la base de datos
    try {
      return await RegisterRepository.registerVehicleCompany(userData);
    } catch (dbError) {
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    }
  } catch (error) {
    // Relanzar el error para que el controlador pueda manejarlo
    throw error;
  }
};
