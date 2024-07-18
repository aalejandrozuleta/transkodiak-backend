import { tempCodeInterface } from '@interfaces/general/tempCode';
import { client } from '@config/redis';

export const saveCodeToRedis = async (code: tempCodeInterface) => {
  const { id_user, email, code: verificationCode } = code;

  try {
    // Crear el objeto que contiene el id y el código
    const data = { id: id_user.toString(), code: verificationCode };

    // Guardar en Redis con la clave siendo el correo y el valor siendo el objeto
    await client.set(email, JSON.stringify(data), { EX: 600 });
  } catch (error) {
    console.error('Error al guardar el código en Redis:', error);
  }
};
