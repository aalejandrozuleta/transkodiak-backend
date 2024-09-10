import { getInformationTransporter } from '@interfaces/transpoter/getInformation';
import { getInformationTransporterService } from '@services/transporter/getInformation';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const getInformationTransporterController = async (
  req: Request,
  res: Response,
) => {
  // validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const idTransporter: string = req.params.id;

  try {
    const transporter: getInformationTransporter[] =
      await getInformationTransporterService(idTransporter);
    res.status(201).json({
      message: 'Información Conseguida con éxito',
      transporters: transporter[0],
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
