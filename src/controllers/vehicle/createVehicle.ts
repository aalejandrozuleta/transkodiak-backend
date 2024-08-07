import CreateVehicleDto from '@dto/vehicle/createVehicle';
import { createVehicle } from '@interfaces/vehicle/createVehicle';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { createVehicleService } from '@services/vehicle/createVehicle';
import { ERROR_MESSAGE } from '@services/vehicle/utils/messageError';

export const createVehicleController = async (req: Request, res: Response) => {
  // Validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const vehicleData: createVehicle = req.body;

  const vehicle = new CreateVehicleDto(
    vehicleData.license_plate,
    vehicleData.capacity,
    vehicleData.vehicle_type,
    vehicleData.load_type,
  );

  try {
    await createVehicleService(vehicle);
    res.status(201).json({ message: 'Vehículo registrado exitosamente' });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === ERROR_MESSAGE.EXISTING_PLATE) {
        return res.status(400).json({ error: 'El vehiculo ya existe' });
      }
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido' });
    }
  }
};
