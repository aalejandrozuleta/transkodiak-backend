import { ERROR_MESSAGE } from './utils/messagesError';
import { FieldPacket } from 'mysql2';
import getInformation from '@repositories/intermediary/getInformation';
import { informationVehicleCompany } from '@interfaces/vehicleCompany/informationVehicleCompany';

export const getInformationService = async (idIntermediary: string) => {
  const [result]: [informationVehicleCompany[], FieldPacket[]] =
    await getInformation
      .getInformationIntermediary(idIntermediary)
      .catch((error) => {
        console.error(error);
        throw new Error(ERROR_MESSAGE.DB_ERROR);
      });

  return result;
};
