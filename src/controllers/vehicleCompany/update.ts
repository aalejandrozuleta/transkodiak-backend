import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { updateService } from '@services/vehicleCompany/update';

interface CustomRequest extends Request {
  user?: {
    id: string;
  };
}

export const updateController = async (req: CustomRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
  }

  const userData = req.body;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(400).json({ error: 'ID de usuario no proporcionado' });
  }

  try {
    await updateService(userId, userData);
    res.status(200).json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocurrió un error desconocido' });
    }
  }
};
