import express, { Router } from 'express';
export const routerTravel: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

//* ----- CREATE VEHICLE-----
import { createTravelValidator} from '@middleware/validation/travel/createTravel';
import { createTravelController } from '@controller/travel/createTravel';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerTravel.post(
  '/createTravel',
  jwtAuthMiddleware,
  createTravelValidator,
  createTravelController,
);