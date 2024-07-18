import UpdateDto from '@dto/vehicleCompany/update';
import UpdateRepository from '@repositories/vehicleCompany/update';
import { ERROR_MESSAGE } from './utils/messagesError';

export const updateService = async (userData: UpdateDto) => {
  // Intentar actualizar la empresa en la base de datos
  return await UpdateRepository.updateVehicleCompany(userData).catch(
    (dbError) => {
      console.log(dbError);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
