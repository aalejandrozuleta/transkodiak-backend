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

  if (result.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_NAME);
  }

  // Intentar hashear la contraseña
  const passwordHash = await hashPassword(userData.password).catch(
    (hashError) => {
      console.log(hashError);
      throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
    },
  );
  userData.password = passwordHash;

  // Intentar registrar la empresa en la base de datos
  return await RegisterRepository.registerIntermediary(userData).catch(
    (dbError) => {
      console.log(dbError);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
