import { createTravelInterface } from '@interfaces/Travel/createTravel';
import { allTravelRepository } from '@repositories/travel/AllTravels';
import { ERROR_MESSAGE } from './utils/errorMessage';
import { FieldPacket } from 'mysql2';

export const allTravelService = async () => {
  try {
    // Llamamos al método getTransporter del repositorio y obtenemos el resultado
    const [result]: [createTravelInterface[], FieldPacket[]] =
      await allTravelRepository.allTravel();

    // Retornamos el resultado
    return result;
  } catch (error) {
    // Si ocurre un error, lo imprimimos en consola y lanzamos un nuevo error con el mensaje correspondiente
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
