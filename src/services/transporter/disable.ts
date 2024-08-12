import { disableDto } from '@dto/transporter/disable';
import { disableRepository } from '@repositories/transporter/disable';
import { ERROR_MESSAGE } from './utils/messagesError';

export const disableService = async (user: disableDto) => {
  await disableRepository.disableAccount(user).catch((errorBd) => {
<<<<<<< HEAD
    console.log(errorBd);
=======
    console.error(errorBd);
>>>>>>> main
    throw new Error(ERROR_MESSAGE.INHABILITE_USER);
  });
};
