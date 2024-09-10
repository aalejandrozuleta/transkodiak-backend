import { FieldPacket } from 'mysql2';
import { ERROR_MESSAGE } from './utils/messageError';
import { getInformationVehicle } from '@interfaces/vehicle/getInformationVehicle';
import { getInformationVehicleRepository } from '@repositories/vehicle/getInformationVehicle';

export const getInformationVehicleService = async (idVehicle: string) => {
  try {
    const [vehicleResult]: [getInformationVehicle[], FieldPacket[]] =
      await getInformationVehicleRepository
        .getInformationVehicle(idVehicle)
        .catch((error) => {
          console.error(error);
          throw Error(ERROR_MESSAGE.GET_INFORMATION);
        });
    return vehicleResult;
  } catch (error) {
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
