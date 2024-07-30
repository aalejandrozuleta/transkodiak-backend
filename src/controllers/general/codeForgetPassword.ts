import { getCodeForgetInterface } from '@interfaces/general/codeForgetPassword';
import codeForgetPasswordDto from '@dto/general/codeForgetPassword';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { codeForgetPasswordService } from '@services/general/codeForgetPassword';

export const codeForgetPasswordController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
  }
  const userData: getCodeForgetInterface = req.body;

  const user = new codeForgetPasswordDto(userData.email, userData.phone);

  try {
    await codeForgetPasswordService(user);
    return res.status(200).json({ message: 'código enviado ' });
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
