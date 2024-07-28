import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import UpdateDto from '@dto/vehicleCompany/update';
import { updateService } from '@services/vehicleCompany/update';

export const updateController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
  }

  const userData: UpdateDto = new UpdateDto(
    req.params.nit,
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.address
  );

  try {
    await updateService(userData);
    res.status(200).json({ message: 'Datos actualizados exitosamente' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido' });
    }
  }
};
