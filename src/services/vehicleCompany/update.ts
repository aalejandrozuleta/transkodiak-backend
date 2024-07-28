import UpdateDto from '@dto/vehicleCompany/update';
import UpdateRepository from '@repositories/vehicleCompany/update';
import { ERROR_MESSAGE } from './utils/messagesError';

export const updateService = async (userData: UpdateDto) => {
  const [existingCompany] = await UpdateRepository.findVehicleCompanyByNit(userData.nit);

  if (existingCompany.length === 0) {
    throw new Error(ERROR_MESSAGE.NOT_FOUND);
  }

  return await UpdateRepository.updateVehicleCompany(userData).catch(
    (dbError) => {
      console.log(dbError);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    }
  );
};
