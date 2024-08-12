import { transporterFindByIdentificationId } from './interface/transporterFindByCedula';
import { FieldPacket } from 'mysql2';
import RegisterDto from '@dto/transporter/register';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/transporter/register';
import { ERROR_MESSAGE } from './utils/messagesError';
import { sendWelcomeEmail } from '@helpers/mail/welcome';

export const registerService = async (userData: RegisterDto) => {
  // Verificar si ya existe una empresa con el mismo nombre
  const [existingName]: [transporterFindByIdentificationId[], FieldPacket[]] =
    await RegisterRepository.findTransporterByDocument(userData);

  const result = existingName[0];

  if (result.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_NAME);
  }

  // Intentar hashear la contraseña
  const passwordHash = await hashPassword(userData.password).catch(
    (hashError) => {
<<<<<<< HEAD
      console.log(hashError);
=======
      console.error(hashError);
>>>>>>> main
      throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
    },
  );
  userData.password = passwordHash;

  await sendWelcomeEmail(userData.email);

  // Intentar registrar la empresa en la base de datos
  return await RegisterRepository.registerTransporter(userData).catch(
    (dbError) => {
<<<<<<< HEAD
      console.log(dbError);
=======
      console.error(dbError);
>>>>>>> main
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
