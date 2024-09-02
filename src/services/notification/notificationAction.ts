import notificationActionDto from '@dto/notification/notificationAction';
import { notificationActionRepository } from '@repositories/notification/notificationAction';
import { ERROR_MESSAGE } from './utils/messagesError';

export const notificationActionService = async (
  decision: notificationActionDto,
) => {
  if (decision.action === 'accepted') {
    await notificationActionRepository
      .inProgressTransporter(decision)
      .catch((errorProgress) => {
        console.error(errorProgress);
        throw new Error(ERROR_MESSAGE.ERROR_PROGRESS);
      });

    await notificationActionRepository
      .accepted(decision)
      .catch((errorAccepted) => {
        console.error(errorAccepted);
        throw new Error(ERROR_MESSAGE.ERROR_ACTION);
      });

    await notificationActionRepository
      .releaseTransporter(decision)
      .catch((errorRejected) => {
        console.error(errorRejected);
        throw new Error('Error en la base de datos');
      });
    
      await notificationActionRepository
      .associateTransporter(decision)
      .catch((errorRejected) => {
        console.error(errorRejected);
        throw new Error('Error en la base de datos');
      });
  }

  if (decision.action === 'denegad') {
    await notificationActionRepository
      .activeTransporter(decision)
      .catch((errorProgress) => {
        console.error(errorProgress);
        throw new Error(ERROR_MESSAGE.ERROR_PROGRESS);
      });

    await notificationActionRepository
      .rejected(decision)
      .catch((errorRejected) => {
        console.error(errorRejected);
        throw new Error(ERROR_MESSAGE.ERROR_ACTION);
      });
  }
};
