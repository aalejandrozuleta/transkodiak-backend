import CreateTravelDto from '@dto/travel/createTravel';
import { createTravelInterface } from '@interfaces/Travel/createTravel';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import { createTravelService } from '@services/travel/createTravel';

export const createTravelController = async (req: Request, res: Response) => {
  // Validaciones de los datos
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const travelData: createTravelInterface = req.body;

  const travel = new CreateTravelDto(
    travelData.weight,
    travelData.origin,
    travelData.destination,
    travelData.payment,
    travelData.description,
    travelData.departureDate,
    travelData.deliverDate,
    travelData.idIntermediary,
    travelData.idTransporter,
  );

  try {
    await createTravelService(travel);
    res.status(201).json({ message: 'Viaje registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Ocurrió un error desconocido' });
  }
};
