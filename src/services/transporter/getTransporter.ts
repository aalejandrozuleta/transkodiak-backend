import { getTransporterInterface } from '@interfaces/transpoter/getTransporter';
import { getTransportersRepository } from '@repositories/transporter/getTransporter';
import { ERROR_MESSAGE } from './utils/messagesError';
import { FieldPacket } from 'mysql2';

<<<<<<< HEAD
export const getTransporterService = async () => {
  try {
    // Llamamos al método getTransporter del repositorio y obtenemos el resultado
    const [result]: [getTransporterInterface[], FieldPacket[]] =
      await getTransportersRepository.getTransporter();
=======
export const getTransporterService = async (idCompany:string) => {
  try {
    // Llamamos al método getTransporter del repositorio y obtenemos el resultado
    const [result]: [getTransporterInterface[], FieldPacket[]] =
      await getTransportersRepository.getTransporter(idCompany);
>>>>>>> main

    // Retornamos el resultado
    return result;
  } catch (error) {
    // Si ocurre un error, lo imprimimos en consola y lanzamos un nuevo error con el mensaje correspondiente
<<<<<<< HEAD
    console.log(error);
=======
    console.error(error);
>>>>>>> main
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
