import UpdateDto from '@dto/vehicleCompany/update';
import { updateVehicleCompany } from '@repositories/vehicleCompany/update';
import { ERROR_MESSAGE } from './utils/messagesError';
import { QueryResult } from '@interfaces/vehicleCompany/queryResult';

export const updateService = async (userId: string, userData: UpdateDto) => {
  try {
    const result: QueryResult = await updateVehicleCompany(userId, userData);
    if (result.affectedRows === 0) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND);
    }
  } catch (error) {
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
