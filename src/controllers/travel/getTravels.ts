import { createTravelInterface } from '@interfaces/Travel/createTravel';
import { getTravelService } from '@services/travel/getTravel';
import { Request, Response } from 'express';

export const getTravelsController = async (req: Request, res: Response) => {
  try {
    const idIntermediary = req.body.token.id;

    const travels: createTravelInterface[] =
      await getTravelService(idIntermediary);
    res.status(201).json({
      message: 'viajes conseguidos con exito',
      travels: travels[0],
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
