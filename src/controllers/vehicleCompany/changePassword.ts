import { validationResult } from 'express-validator';
import { changePasswordInterface } from './../../interfaces/vehicleCompany/changePassword';
import ChangePasswordDto from '@dto/vehicleCompany/changePassword';
import { Request, Response } from 'express';
import { changePasswordService } from '@services/vehicleCompany/changePassword';

export const changePassword = async (req: Request, res: Response) => {
  // validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const userData: changePasswordInterface = req.body;

  const user = new ChangePasswordDto(
    userData.userId,
    userData.currentPassword,
    userData.newPassword,
  );

  try {
    await changePasswordService(user);
    res.status(200).json({ message: 'Contraseña cambiada exitosamente' });
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
