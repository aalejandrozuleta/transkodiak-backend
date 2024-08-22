import { createTravelInterface } from '@interfaces/Travel/createTravel';
import { getTravelRepository } from '@repositories/travel/getTravels';
import { ERROR_MESSAGE } from './utils/errorMessage';
import { FieldPacket } from 'mysql2';

export const getTravelService = async (idIntermediary: string) => {
  try {
    // Llamamos al método getTransporter del repositorio y obtenemos el resultado
    const [result]: [createTravelInterface[], FieldPacket[]] =
      await getTravelRepository.getTravel(idIntermediary);

    // Retornamos el resultado
    return result;
  } catch (error) {
    // Si ocurre un error, lo imprimimos en consola y lanzamos un nuevo error con el mensaje correspondiente
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
