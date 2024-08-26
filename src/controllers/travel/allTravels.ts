import { createTravelInterface } from '@interfaces/Travel/createTravel';
import { allTravelService } from '@services/travel/allTravels';
import { Request, Response } from 'express';

export const allTravelsController = async (req: Request, res: Response) => {
  try {
    const travels: createTravelInterface[] = await allTravelService();
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
