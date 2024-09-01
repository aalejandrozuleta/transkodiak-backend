import { statusTransporter } from './interface/statusTransporter';
import { createNotificationDto } from '@dto/notification/createNotification';
import notificationRepository from '@repositories/notification/createNotification';
import { ERROR_MESSAGE } from './utils/messagesError';
import { FieldPacket, QueryResult } from 'mysql2';

export const createNotificationService = async (
  notification: createNotificationDto,
) => {
  const [result]: [statusTransporter[][], FieldPacket[]] =
    await notificationRepository
      .GetTransporterStatus(notification)
      .catch((errorStatus) => {
        console.error(errorStatus);
        throw new Error(ERROR_MESSAGE.STATUS_ERROR);
      });

  // El primer elemento es un array de arrays
  const status = result[0][0];

  // Verifica si el estado del transportista es 'disabled'
  if (
    status.statusTransporter === 'Inactive' ||
    status.statusTransporter === 'In transit'
  ) {
    throw new Error(ERROR_MESSAGE.STATUS_CODE);
  }

  await notificationRepository
    .createNotification(notification)
    .catch((errorNotification) => {
      console.error(errorNotification);
      throw new Error(ERROR_MESSAGE.NOTIFICATION_ERROR);
    });
  await notificationRepository
    .disableTransporter(notification)
    .catch((errorDisable) => {
      console.error(errorDisable);
      throw new Error(ERROR_MESSAGE.DISABLE_ERROR);
    });
};
