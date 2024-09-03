import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { changePasswordDto } from '@dto/general/changePassword';
import { changePasswordService } from '@services/general/changePassword';

export const changePasswordController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
  }

  const { newPassword, confirmPassword } = req.body;
  const { token } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }

  // Crea una instancia de changePasswordDto
  const user = new changePasswordDto(
    parseInt(token.id, 10), // Asegúrate de que el id sea un número
    token.userType,         // userType es el tipo de usuario, asegúrate de que coincide con los valores esperados
    newPassword             // La nueva contraseña
  );

  try {
    await changePasswordService(user);
    res.status(200).json({ mensaje: 'Contraseña actualizada correctamente' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido' });
    }
  }
};
