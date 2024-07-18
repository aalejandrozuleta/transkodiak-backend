import { Payload } from '@helpers/interfaces/payload';
import { verifyToken } from '@helpers/redis/verifyToken';
import { Request, Response, NextFunction } from 'express';
import { getTokenFromRedis } from '@helpers/redis/getTokenFromRedis';


export const jwtAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Obtener el token de autorización del encabezado
    const authorization = req.get('Authorization');

    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'Authorization header is missing' });
    }

    // Verificar si el token está presente y en el formato correcto
    const token: string = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ status: 'Token is missing' });
    }

    // Verificar el token y obtener el campo 'iat'
    const decoded:any = verifyToken(token);
    const email = decoded.email;

    // Buscar el token en la base de datos de Redis usando el campo 'iat'
    const tokenFromRedis = await getTokenFromRedis(email);

    if (!tokenFromRedis) {
      return res.status(403).json({ status: 'Token not found in Redis' });
    }

    // Adjuntar el payload decodificado al objeto de solicitud para su uso posterior
    req.body.token = decoded;

    // Continuar con la siguiente función de middleware
    next();
  } catch (error) {
    // Si hay un error, responder con un error de autorización
    return res.status(403).json({ status: 'Unauthorized' });
  }
};
