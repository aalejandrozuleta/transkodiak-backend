import { transporterFindByIdentificationId } from './interface/transporterFindByCedula';
import { FieldPacket } from 'mysql2';
import RegisterDto from '@dto/transporter/register';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/transporter/register';
import { ERROR_MESSAGE } from './utils/messagesError';
import { sendWelcomeEmail } from '@helpers/mail/welcome';

export const registerService = async (userData: RegisterDto) => {
  // Verificar si ya existe un transportador con la misma identificación
  const [existingTransporter]: [transporterFindByIdentificationId[], FieldPacket[]] =
    await RegisterRepository.findTransporterByIdentificationId(userData.idNumber);

    const result = existingTransporter[0];

    console.log(result);
  
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

  await sendWelcomeEmail(userData.email);

  // Intentar registrar el transportador en la base de datos
  return await RegisterRepository.registerTransporter(userData).catch(
    (dbError) => {
      console.log(dbError);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
