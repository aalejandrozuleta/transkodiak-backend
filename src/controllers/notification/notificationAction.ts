import { notificationAction } from '@interfaces/notification/notificationAction';
import notificationActionDto from '@dto/notification/notificationAction';
import { Request, Response } from 'express';
import { notificationActionService } from '@services/notification/notificationAction';

export const notificationActionController = async (
  req: Request,
  res: Response,
) => {
  const data: notificationAction = req.body;

  const decision = new notificationActionDto(
    data.action,
    data.idNotification,
    data.idTransporter,
    data.idTravel,
  );

  try {
    await notificationActionService(decision);
    res.status(201).json({ message: 'Decision realizada con éxito' });
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
