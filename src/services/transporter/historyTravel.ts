import historyTravelRepository from '@repositories/transporter/historyTravel';
import { ERROR_MESSAGE } from './utils/messagesError';
import { FieldPacket } from 'mysql2';
import { historyTravel } from '@interfaces/transpoter/historyTravel';

export const historyTravelService = async (idTransporter: number) => {
  try {
    const [result]: [historyTravel[], FieldPacket[]] =
      await historyTravelRepository.getHistory(idTransporter).catch((error) => {
        console.error(error);
        throw new Error(ERROR_MESSAGE.HISTORY_ERROR); // Lanzamos una excepción con el mensaje de error de la base de datos en caso de error en la llamada al repositorio
      });
    return result; // Retornamos el resultado de la llamada al repositorio
  } catch (error) {
    // Si ocurre un error, lo imprimimos en consola y lanzamos un nuevo error con el mensaje correspondiente
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
