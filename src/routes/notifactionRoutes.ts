import express, { Router } from 'express';
export const routerNotification: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

/**
 * @route POST /createNotification
 * @description Registrar una nueva notificacion
 * @access privado  
*/
import { createNotificationController } from '@controller/notification/createNotification';

routerNotification.post('/createNotification',jwtAuthMiddleware,createNotificationController);