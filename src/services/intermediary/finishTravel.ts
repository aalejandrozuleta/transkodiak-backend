import { finishTravelRepository } from '@repositories/intermediary/finishTravel';
import { ERROR_MESSAGE } from './utils/messagesError';

export const finishTravelService = async (idUser: string) => {
  finishTravelRepository.finishTravel(idUser).catch((error) => {
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  });
};
