import { getDisableInterface } from '@interfaces/vehicleCompany/getDisable';
import { getDisableService } from '@services/vehicleCompany/getDisable';
import { Request, Response } from 'express';

export const getDisabledController = async (req: Request, res: Response) => {
  try {
    const idCompany = req.body.token.id;

    const information: getDisableInterface[] =
      await getDisableService(idCompany);
    res.status(201).json({
      message: 'Información conseguida con éxito',
      vehicles: information[0],
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