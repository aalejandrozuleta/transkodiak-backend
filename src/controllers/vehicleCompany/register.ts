import RegisterDto from '@dto/vehicleCompany/register';
import { createVehicleCompany } from '@interfaces/vehicleCompany/createVehicleCompany';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { registerService } from '@services/vehicleCompany/register';

export const registerController = async (req: Request, res: Response) => {
  // validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const userData: createVehicleCompany = req.body;

  const user = new RegisterDto(
    userData.nit,
    userData.name,
    userData.phone,
    userData.email,
    userData.address,
    userData.password,
  );

  try {
    await registerService(user);
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
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
