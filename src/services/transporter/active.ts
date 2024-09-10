import { activeRepository } from '@repositories/transporter/active';
import { ERROR_MESSAGE } from './utils/messagesError';

export const activeService = async (idTransporter: string) => {
  try {
    await activeRepository.activeTransporter(idTransporter).catch((error) => {
      console.error(error);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    });
  } catch (error) {
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
