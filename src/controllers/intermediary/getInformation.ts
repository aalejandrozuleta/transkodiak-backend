import { informationIntermediary } from '@interfaces/intermediary/information';
import { getInformationService } from '@services/intermediary/getInformation';
import { Request, Response } from 'express';

export const getInformationController = async (req: Request, res: Response) => {
  try {
    const idIntermediary = req.body.token.id;

    const information: informationIntermediary[] =
      await getInformationService( idIntermediary);
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
