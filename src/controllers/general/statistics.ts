import { statisticsService } from '@services/general/statistics';
import { Request, Response } from 'express';

export const statisticsController = async (req: Request, res: Response) => {
  const idUser = req.body.token.id;
  const rolUSer = req.body.token.typeUser;

  try {
    const information = await statisticsService(idUser, rolUSer);
    res.status(201).json({
      message: 'Información conseguida con éxito',
      vehicles: information,
    });
  } catch (error) {
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
