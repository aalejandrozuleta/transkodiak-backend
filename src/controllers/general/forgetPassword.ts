import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { forgetPasswordInterface } from '@interfaces/general/forgetPassword';
import { forgetPasswordDto } from '@dto/general/forgetPassword';
import { forgetPasswordService } from '@services/general/forgetPassword';

export const forgetPasswordController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
  }
  const userData: forgetPasswordInterface = req.body;

  const user = new forgetPasswordDto(
    userData.id_user,
    userData.email,
    userData.password,
    userData.code,
  );

  try {
    await forgetPasswordService(user);
    res.status(200).json({
      mensaje: 'Contraseña actualizada correctamente',
    });
  } catch (error) {
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
