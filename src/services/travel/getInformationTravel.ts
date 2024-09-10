import { getInformationTravel } from '@interfaces/transpoter/getInformationTravel';
import { ERROR_MESSAGE } from './utils/errorMessage';
import { FieldPacket } from 'mysql2';
import { getInformationTravelRepository } from '@repositories/travel/getInformationTravel';

export const getInformationTravelService = async (idTravel: string) => {
  try {
    const [travelResult]: [getInformationTravel[], FieldPacket[]] =
      await getInformationTravelRepository
        .getInformation(idTravel)
        .catch((error) => {
          console.error(error);
          throw Error(ERROR_MESSAGE.GET_INFORMATION);
        });

    return travelResult;
  } catch (error) {
    console.error(error);
    throw Error(ERROR_MESSAGE.DB_ERROR);
  }
};
