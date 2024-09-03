import { createNotification } from '@interfaces/notification/createNotification';
import { createNotificationDto } from '@dto/notification/createNotification';
import { Request, Response } from 'express';
import { createNotificationService } from '@services/notification/createNotification';

export const createNotificationController = async (
  req: Request,
  res: Response,
) => {
  const jwtTransporter = req.body.token.id;
  const notificationData: createNotification = req.body;
  notificationData.transporterId = jwtTransporter;

  const createNotification = new createNotificationDto(
    notificationData.transporterId,
    notificationData.intermediaryId,
    notificationData.tripId,
  );

  try {
    console.log(notificationData);
    await createNotificationService(createNotification);
    res.status(201).json({ message: 'Notificación creada exitosamente' });
  } catch (error) {
    // Comprobar si el error es una instancia de Error
    if (error instanceof Error) {
      res.status(500).json({
        error: error.message,
      });
    } else {
      // Si el error no es una instancia de Error, manejar el caso
      res.status(500).json({
        error: 'Ocurrió un error desconocido',
      });
    }
  }
};
