import { createVehicle } from '@interfaces/vehicle/createVehicle';
import { getVehicleRepository } from '@repositories/vehicle/getVehicle';
import { ERROR_MESSAGE } from './utils/messageError';
import { FieldPacket } from 'mysql2';

export const getVehicleService = async (idCompany: string) => {
  try {
    // Llamamos al método getTransporter del repositorio y obtenemos el resultado
    const [result]: [createVehicle[], FieldPacket[]] =
      await getVehicleRepository.getVehicle(idCompany);

    // Retornamos el resultado
    return result;
  } catch (error) {
    // Si ocurre un error, lo imprimimos en consola y lanzamos un nuevo error con el mensaje correspondiente
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
