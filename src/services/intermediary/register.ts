import { intermediaryFindByName } from './interface/intermediaryFindByName';
import { FieldPacket } from 'mysql2';
import RegisterDto from '@dto/intermediary/registerDto';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/intermediary/registerIntermediary';
import { ERROR_MESSAGE } from '../vehicleCompany/utils/messagesError';

export const registerService = async (userData: RegisterDto) => {
  // Verificar si ya existe una empresa con el mismo nombre
  const [existingName]: [intermediaryFindByName[], FieldPacket[]] =
    await RegisterRepository.findIntermediaryByName(userData);

  const result = existingName[0];

  // Si el nombre de la empresa ya existe, lanzar una excepción personalizada
  if (result.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING);
  }

  // Intentar hashear la contraseña
  const passwordHash = await hashPassword(userData.password).catch(
    (hashError) => {
      console.log(hashError);
      throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
    },
  );
  // Guardar la contraseña hasheada en el objeto userData
  userData.password = passwordHash;

  // Intentar registrar la empresa en la base de datos
  return await RegisterRepository.registerIntermediary(userData).catch(
    (dbError) => {
      console.log(dbError);
      // Capturar error de entrada duplicada y personalizar el mensaje
      if (dbError.code === 'ER_DUP_ENTRY') {
        if (dbError.message.includes('email')) {
          throw new Error(ERROR_MESSAGE.DUPLICATE_EMAIL);
        } else if (dbError.message.includes('name')) {
          throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
        } else if (dbError.message.includes('nit')) {
          throw new Error(ERROR_MESSAGE.DUPLICATE_NIT);
        }
      }
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
