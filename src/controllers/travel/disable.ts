import { disableTravelInterface } from './../../interfaces/Travel/disable';
import { disableTravelDto } from '@dto/travel/disable';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { disableService } from '@services/travel/disable';

export const disableController = async (req: Request, res: Response) => {
  // validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const TravelData: disableTravelInterface = {
    id: Number(req.params.id),
  };

  const travel = new disableTravelDto(TravelData.id);

  try {
    await disableService(travel);
    res.status(201).json({ message: 'Vehiculo  deshabilitado con éxito' });
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
