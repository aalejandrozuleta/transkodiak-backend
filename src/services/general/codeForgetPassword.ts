import { codeForget } from './utils/interface/codeForget';
import codeForgetPasswordDto from '@dto/general/codeForgetPassword';
import { tempCodeInterface } from '@interfaces/general/tempCode';
import getCodeForgetRepository from '@repositories/general/codeForgetPassword';
import { FieldPacket } from 'mysql2';
import { ERROR_MESSAGE } from './utils/messagesError';
import { generateTemCode } from '@helpers/generateTemCode';
import { saveCodeToRedis } from '@helpers/redis/saveCode';
import axios from 'axios';

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

  await saveCodeToRedis(temCode).catch((saveError) => {
    console.error(saveError);
    throw new Error(ERROR_MESSAGE.SAVE_CODE_REDIS_ERROR);
  });

  await axios
    .post(
      `${process.env.ROUTE_EMAIL_AZURE}`,
      {
        subject: 'Código de recuperación',
        to: user.email,
        dataTemplate: { code: temCode.code },
        templateName: 'forgetPassword.html',
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

  return {
    code: code.code,
  };
};
