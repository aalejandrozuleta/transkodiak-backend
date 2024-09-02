import { getNotification } from '@interfaces/notification/getNotification';
import { getNotificationRepository } from '@repositories/notification/getNotification';
import { FieldPacket } from 'mysql2';

export const getNotificationService = async (date: number) => {
  const [notification]: [getNotification[], FieldPacket[]] =
    await getNotificationRepository.getNotification(date);
  return notification;
};
