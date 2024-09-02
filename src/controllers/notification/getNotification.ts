import { getNotification } from '@interfaces/notification/getNotification';
import { getNotificationService } from '@services/notification/getNotification';
import { Request, Response } from 'express';

export const getNotificationController = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = req.body.token.id;

    const notifications: getNotification[] = await getNotificationService(data); 

    res.status(200).json({
      message: 'Notificaciones obtenidas con éxito',
      notification: notifications[0],
    });
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
