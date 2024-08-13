import { createVehicle } from '@interfaces/vehicle/createVehicle';
import { getVehicleService } from '@services/vehicle/getVehicle';
import { Request, Response } from 'express';

export const getvehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicles: createVehicle[] = await getVehicleService();
    res.status(201).json({
      message: 'vehiculos conseguidos con exito',
      vehicles: vehicles[0],
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
