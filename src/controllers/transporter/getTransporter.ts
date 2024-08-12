import { getTransporterInterface } from '@interfaces/transpoter/getTransporter';
import { getTransporterService } from '@services/transporter/getTransporter';
import { Request, Response } from 'express';

export const getTransportersController = async (
  req: Request,
  res: Response,
) => {
  try {
    const idCompany = req.body.token.id;

    const transporters: getTransporterInterface[] =
      await getTransporterService(idCompany);
    res.status(201).json({
      message: 'Transportadores conseguidos con éxito',
      transporters: transporters[0],
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
