import { client } from '@config/redis';

export const getTokenCode = async (email: string) => {
  try {
    const data = await client.get(email);
    if (data) {
      // Deserializar el JSON a un objeto
      return JSON.parse(data as string);
    } else {
      console.log('No se encontró ningún dato para el correo electrónico proporcionado.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener los datos desde Redis:', error);
    return null;
  }
};
