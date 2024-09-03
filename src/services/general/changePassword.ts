import { changePasswordDto } from '@dto/general/changePassword';
import { ERROR_MESSAGE } from '@services/general/utils/messagesError';
import { hashPassword } from '@helpers/password/hashPassword'; // Asegúrate de que esta función hashée correctamente
import { changePasswordRepository } from '@repositories/general/changePassword';

export const changePasswordService = async (userData: changePasswordDto) => {
  // Hash de la nueva contraseña
  const hashedPassword = await hashPassword(userData.newPassword).catch((errorHashPassword) => {
    console.error(errorHashPassword);
    throw new Error(ERROR_MESSAGE.HASH_PASSWORD_FAILED);
  });

  userData.newPassword = hashedPassword;

  try {
    await changePasswordRepository.changePassword(userData);
  } catch (error) {
    console.error(error);
    throw new Error(ERROR_MESSAGE.DB_ERROR);
  }
};
