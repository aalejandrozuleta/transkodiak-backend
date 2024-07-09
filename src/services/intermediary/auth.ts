/* eslint-disable no-useless-catch */
import { authIntermediary } from './interface/auth';
import AuthDto from '@dto/intermediary/authDto';
import { authInterface } from '@interfaces/intermediary/auth';
import AuthRepository from '@repositories/intermediary/auth';
import { ERROR_MESSAGE } from '../vehicleCompany/utils/messagesError';
import { comparePassword } from '@helpers/password/comparePassword';
import { generateToken } from '@helpers/generateToken';
import {
  incrementFailedAttempts,
  resetFailedAttempts,
  isBlocked,
} from '@helpers/redis/authAttempts';
import { getTokenFromRedis } from '@helpers/redis/getTokenFromRedis';
import { saveTokenToRedis } from '@helpers/redis/saveToken';

export const authService = async (user: AuthDto, userData: authInterface) => {
  try {
    // Verificar si el usuario está bloqueado
    if (await isBlocked(user.email)) {
      throw new Error(ERROR_MESSAGE.BLOCKED_USER);
    }

    // Buscar el usuario en la base de datos
    const credentials: authIntermediary[] =
      await AuthRepository.authenticateUser(user);

    // Verificar si el usuario existe
    if (credentials.length === 0) {
      await incrementFailedAttempts(user.email);
      throw new Error(ERROR_MESSAGE.CREDENTIALS);
    }

    // Asignar el correo electrónico, el NIT y la contraseña del usuario a userData
    userData.email = user.email;
    userData.intermediary_id = credentials[0].intermediary_id;
    userData.password = credentials[0].password;
    userData.user_type = 'Empresa Intermediaria';

    // revisar la contraseña del usuario
    const isPasswordValid = await comparePassword(
      user.password,
      credentials[0].password,
    ).catch((hashError) => {
      console.log(hashError);
      throw new Error(ERROR_MESSAGE.CREDENTIALS);
    });

    // Si la contraseña no es válida, incrementar el número de intentos fallidos
    if (!isPasswordValid) {
      await incrementFailedAttempts(user.email);
      throw new Error(ERROR_MESSAGE.CREDENTIALS);
    }

    // Resetear el número de intentos fallidos para el usuario
    await resetFailedAttempts(user.email);

    // Obtener token existente de Redis
    const existingToken = await getTokenFromRedis(user.email);

    // Generar un token para el usuario, reutilizando el token existente si lo hay
    const token = generateToken(
      userData.intermediary_id,
      userData.email,
      userData.user_type,
      userData.blockUser,
      userData.timeBlock,
      existingToken || undefined,
    );
    userData.token = token;

    // Guardar el token en Redis
    await saveTokenToRedis(user.email, token);

    return { token };
  } catch (error) {
    throw error;
  }
};
