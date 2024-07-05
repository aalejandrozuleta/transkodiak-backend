import pool from './mysql';
import { checkRedisCodeConnectionCode } from './redisCode';

const checkDatabaseConnection = async () => {
  try {
    const mysqlConnection = await pool.getConnection();
    console.log('Conexión a la base de datos MySQL exitosa.');
    mysqlConnection.release();

    checkRedisCodeConnectionCode();
  } catch (error) {
    console.error('Error al conectar:', error);
    throw error; // Re-lanza el error para manejo adicional si es necesario
  }
};

export default checkDatabaseConnection;
