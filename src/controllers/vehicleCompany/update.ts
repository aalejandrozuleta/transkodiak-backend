import UpdateDto from '@dto/vehicleCompany/update';
import { updateVehicleCompany } from '@interfaces/vehicleCompany/update';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { updateService } from '@services/vehicleCompany/update';

export const updateController = async (req: Request, res: Response) => {
  // Validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const userData: updateVehicleCompany = req.body;

  const { nit } = req.params; 
  const user = new UpdateDto(
    nit,
    userData.name,
    userData.phone,
    userData.email,
    userData.address,
  );

  try {
    await updateService(user);
    res.status(200).json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        error: error.message,
      });
    } else {
      res.status(500).json({
        error: 'Ocurrió un error desconocido',
      });
    }
  }
};
