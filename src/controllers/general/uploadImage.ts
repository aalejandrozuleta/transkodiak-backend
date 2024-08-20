import { uploadImageService } from '@services/general/uploadImage';
import { Request, Response } from 'express';
import { uploadImage } from '@interfaces/general/uploadImage';
import uploadImageDto from '@dto/general/uploadImage';

export const uploadImageController = async (req: Request, res: Response) => {
  const userData: uploadImage = {
    email: req.body.token.email,
    file: req.file as Express.Multer.File,
  };

  const data = new uploadImageDto(userData.email, userData.file);

  try {
    await uploadImageService(data);

    res.status(201).json({
      message: 'Imagen actualiza con éxito',
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
