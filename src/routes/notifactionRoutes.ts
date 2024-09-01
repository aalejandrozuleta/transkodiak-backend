import express, { Router } from 'express';
export const routerNotification: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

/**
 * @route POST /createNotification
 * @description Registrar una nueva notificación
 * @access privado
 */
import { createNotificationController } from '@controller/notification/createNotification';

routerNotification.post(
  '/createNotification',
  jwtAuthMiddleware,
  createNotificationController,
);

/**
 * @route PUT /notificationAction
 * @description Acción para aceptar o denegar Transportador
 * @access privado
*/

import { notificationActionController } from '@controller/notification/notificationAction';

routerNotification.put(
  '/notificationAction',
  jwtAuthMiddleware,
  notificationActionController,
);
