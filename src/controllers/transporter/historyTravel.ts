import { historyTravel } from "@interfaces/transpoter/historyTravel";
import { historyTravelService } from "@services/transporter/historyTravel";
import { Request, Response } from "express";

export const historyTravelController = async (req:Request, res:Response) => {
  try {
    const idTransporter = req.body.token.id;

    const history:historyTravel[] = await historyTravelService(idTransporter);
   
    res.status(201).json({
      message: 'Historial conseguido éxito',
      transporters: history[0],
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
}