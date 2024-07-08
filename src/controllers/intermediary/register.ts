import { createIntermediary } from '@interfaces/intermediary/createIntermediary';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import RegisterDto from '@dto/intermediary/registerDto';
import { registerService } from '@services/intermediary/register';

export const registerController = async (req: Request, res: Response) => {
  // validaciones de los datos que se estan ingresando
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const userData: createIntermediary = req.body;

  const user = new RegisterDto(
    userData.name,
    userData.email,
    userData.phone,
    userData.address,
    userData.password,
  );

  try {
    await registerService(user);
    res.status(201).json({ message: 'Intermediario registrado exitosamente' });
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
