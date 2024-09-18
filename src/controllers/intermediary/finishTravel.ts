import { finishTravelService } from '@services/intermediary/finishTravel';
import { Request, Response } from 'express';

export const finishTravelController = async (req: Request, res: Response) => {
  try {
    const idTRansporter = req.params.id;

    await finishTravelService(idTRansporter);
    res.status(200).json({
      message: 'Viaje terminado con éxito',
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
