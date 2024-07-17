import { tempCodeInterface } from '@interfaces/general/tempCode';
import { client } from '@config/redis';

export const saveCodeToRedis = async (code: tempCodeInterface) => {
  const id = code.id_user.toString();
  try {
    await client.set(id, code.code, { EX: 600 });
  } catch (error) {
    console.error('Error al guardar el código en Redis:', error);
  }
};
