import { disableInterface } from './../../interfaces/transpoter/disable';
import { disableDto } from '@dto/transporter/disable';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { disableService } from '@services/transporter/disable';

export const disableController = async (req: Request, res: Response) => {
  // validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const userData: disableInterface = {
    id: Number(req.params.id)
  };

  const user = new disableDto(userData.id);

  try {
    await disableService(user);
    res.status(201).json({ message: 'Transportador  deshabilitado con éxito' });
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
