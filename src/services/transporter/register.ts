import axios from 'axios';
import { transporterFindByIdentificationId } from './interface/transporterFindByCedula';
import { FieldPacket } from 'mysql2';
import RegisterDto from '@dto/transporter/register';
import { hashPassword } from '@helpers/password/hashPassword';
import RegisterRepository from '@repositories/transporter/register';
import { ERROR_MESSAGE } from './utils/messagesError';
import { searchEmail } from '@interfaces/general/searchEmail';
import dotenv from 'dotenv';
dotenv.config();

export const registerService = async (userData: RegisterDto) => {
  const [existingEmail]: [searchEmail[], FieldPacket[]] =
    await RegisterRepository.searchEmail(userData).catch((error) => {
      console.error(error);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    });

  // Verificar si ya existe una empresa con el mismo nombre
  const [existingName]: [transporterFindByIdentificationId[], FieldPacket[]] =
    await RegisterRepository.findTransporterByDocument(userData).catch(
      (error) => {
        console.error(error);
        throw new Error(ERROR_MESSAGE.DB_ERROR);
      },
    );

  const resultName = existingName[0];
  const resultEmail = existingEmail[0];

  if (resultEmail.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_EMAIL);
  }

  if (resultName.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_NAME);
  }

  const passwordNoHash = userData.password

  // Intentar hashear la contraseña
  const passwordHash = await hashPassword(userData.password).catch(
    (hashError) => {
      console.error(hashError);
      throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
    },
  );
  userData.password = passwordHash;

  await axios
    .post(
      `${process.env.ROUTE_EMAIL_AZURE}`,
      {
        subject: 'Registro exitoso de transportador',
        to: userData.email,
        dataTemplate: {"name":userData.name, "email":userData.email, "password":passwordNoHash },
        templateName: 'registerTransporter.html',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .catch((errorSend) => {
      console.error(errorSend);
      throw new Error(ERROR_MESSAGE.SEND_EMAIL_FAILED);
    });

  // Intentar registrar la empresa en la base de datos
  return await RegisterRepository.registerTransporter(userData).catch(
    (dbError) => {
      console.error(dbError);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    },
  );
};
