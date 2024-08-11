import { createVehicle } from '@interfaces/vehicle/createVehicle';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { createVehicleService } from '@services/vehicle/createVehicle';
import CreateVehicleDto from '@dto/vehicle/createVehicle';

export const CreateVehicleController = async (req: Request, res: Response) => {
  // validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const vehData: createVehicle = req.body;

  const vehicle = new CreateVehicleDto (
    vehData.license_plate,
    vehData.capacity,
    vehData.vehicle_type,
    vehData.load_type,
    vehData.model,
    vehData.brand,
    vehData.idCompany,
  );

  try {
    await createVehicleService(vehicle);
    res.status(201).json({ message: 'Vehiculo registrado exitosamente' });
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
