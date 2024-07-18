import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT secret key not found in environment variables.');
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    // Aquí puedes manejar los errores específicos de JWT
    if (error instanceof jwt.JsonWebTokenError) {
      // El token no es válido
      throw new Error('Invalid token.');
    } else if (error instanceof jwt.NotBeforeError) {
      // El token no es válido antes de una cierta hora
      throw new Error('Token not valid yet.');
    } else if (error instanceof jwt.TokenExpiredError) {
      // El token ha expirado
      throw new Error('Token expired.');
    } else {
      throw error;
    }
  }
};
