import { getInformationVehicle } from '@interfaces/vehicle/getInformationVehicle';
import { getInformationVehicleService } from '@services/vehicle/getInformationVehicle';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const getInformationVehicleController = async (
  req: Request,
  res: Response,
) => {
  // validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const idVehicle: string = req.params.plate;

  try {
    const vehicle: getInformationVehicle[] =
      await getInformationVehicleService(idVehicle);
    res.status(201).json({
      message: 'Información Conseguida con éxito',
      transporters: vehicle[0],
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
