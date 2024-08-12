import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@helpers/redis/verifyToken';
import { getTokenFromRedis } from '@helpers/redis/getTokenFromRedis';
import { Payload } from '@helpers/interfaces/payload';

export const jwtAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authorization = req.get('Authorization');

    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'Authorization header is missing' });
    }

    const token: string = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ status: 'Token is missing' });
    }

    const decoded: Payload = verifyToken(token);
    const email = decoded.email;
<<<<<<< HEAD
=======
    const idCompany = decoded.id;
>>>>>>> main

    const tokenFromRedis = await getTokenFromRedis(email);

    if (!tokenFromRedis) {
      return res.status(403).json({ status: 'Token not found in Redis' });
    }

    req.body.token = decoded;
<<<<<<< HEAD
=======
    req.body.idCompany = idCompany; 
>>>>>>> main

    next();
  } catch (error) {
    return res.status(403).json({ status: 'Unauthorized' });
  }
};
