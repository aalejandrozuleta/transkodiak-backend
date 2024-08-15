import { ERROR_MESSAGE } from './utils/messagesError';
import { FieldPacket } from 'mysql2';
import getInformation from '@repositories/vehicleCompany/getInformation';
import { informationVehicleCompany } from '@interfaces/vehicleCompany/informationVehicleCompany';

export const getInformationService = async (idCompany: string) => {
  const [result]: [informationVehicleCompany[], FieldPacket[]] =
    await getInformation.getVehicle(idCompany).catch((error) => {
      console.error(error);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    });

  return result;
};
