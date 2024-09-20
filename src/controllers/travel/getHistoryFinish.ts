import { getHistoryFinishService } from '@services/travel/getHistoryFinish';
import { Request, Response } from 'express';

export const getHistoryFinishController = async (
  req: Request,
  res: Response,
) => {
  try {
    const idIntermediary = req.body.token.id;

    const result = await getHistoryFinishService(idIntermediary);
    res.status(201).json({
      message: 'Información conseguida con éxito',
      travels: result,
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
