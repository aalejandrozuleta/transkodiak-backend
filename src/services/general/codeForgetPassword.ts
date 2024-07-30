import { codeForget } from './utils/interface/codeForget';
import codeForgetPasswordDto from '@dto/general/codeForgetPassword';
import { tempCodeInterface } from '@interfaces/general/tempCode';
import getCodeForgetRepository from '@repositories/general/codeForgetPassword';
import { FieldPacket } from 'mysql2';
import { ERROR_MESSAGE } from './utils/messagesError';
import { generateTemCode } from '@helpers/generateTemCode';
import { saveCodeToRedis } from '@helpers/redis/saveCode';
import { sendCodeForgetPassword } from '@helpers/mail/sendCodeForgetPassword';

export const codeForgetPasswordService = async (
  user: codeForgetPasswordDto,
) => {
  const result: [codeForget[][], FieldPacket[]] =
    await getCodeForgetRepository.searchUserCode(user);

  const bdData = result[0][0][0];

  if (!result.length) {
    throw new Error(ERROR_MESSAGE.CREDENTIALS);
  }

  const code = await generateTemCode().catch((hashError) => {
    console.error(hashError);
    throw new Error(ERROR_MESSAGE.GENERATE_CODE_ERROR);
  });

  const temCode: tempCodeInterface = {
    id_user: bdData.id,
    email: user.email,
    code: code.code,
  };

  console.error(temCode.code);

  await saveCodeToRedis(temCode).catch((saveError) => {
    console.error(saveError);
    throw new Error(ERROR_MESSAGE.SAVE_CODE_REDIS_ERROR);
  });

  await sendCodeForgetPassword(user.email, code.code).catch((sendError) => {
    console.error(sendError);
    throw new Error(ERROR_MESSAGE.SEND_CODE_FORGET_PASSWORD_ERROR);
  });

  return {
    code: code.code,
  };
};
