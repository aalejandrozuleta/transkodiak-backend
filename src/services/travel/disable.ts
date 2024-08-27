import { disableTravelDto } from '@dto/travel/disable';
import { disableRepository } from '@repositories/travel/disable';
import { ERROR_MESSAGE } from './utils/errorMessage';

export const disableService = async (travel: disableTravelDto) => {
  await disableRepository.disableAccount(travel).catch((errorBd) => {
    console.error(errorBd);
    throw new Error(ERROR_MESSAGE.INHABILITE_USER);
  });
};
