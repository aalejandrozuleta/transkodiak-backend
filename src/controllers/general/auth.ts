import { authInterface } from '@interfaces/general/auth';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import AuthDto from '@dto/general/authDto';
import { authService } from '@services/general/auth';

export const authController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }
  const userData: authInterface = req.body;
  const user = new AuthDto(userData.email, userData.password);

  try {
    console.log('sapo');

    const { token } = await authService(user, userData);
    res.status(201).json({
      mensaje: 'Usuario iniciado con éxito',
      toke: token,
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
