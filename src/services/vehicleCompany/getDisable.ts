import { getDisableRepository } from '@repositories/vehicleCompany/getDisable';
import { ERROR_MESSAGE } from './utils/messagesError';
import { getDisableInterface } from '@interfaces/vehicleCompany/getDisable';
import { FieldPacket } from 'mysql2';

export const getDisableService = async (idCompany: string) => {
  try {
    const [result]: [getDisableInterface[], FieldPacket[]] =
      await getDisableRepository.getDisable(idCompany);

    // Retornamos el resultado
    return result;
  } catch (error) {
    // Si ocurre un error, lo imprimimos en consola y lanzamos un nuevo error con el mensaje correspondiente
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
