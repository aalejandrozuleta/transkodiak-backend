import express, { Router } from 'express';
export const routerTravel: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

//* ----- CREATE TRAVEL----
import { createTravelValidator } from '@middleware/validation/travel/createTravel';
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

//* ------------------- CONSEGUIR TRAVELS BY TOKEN ------------------
import { getTravelsController } from '@controller/travel/getTravels';

/**
 * @route GET /travels
 * @description Obtener todos los viajes registrados por ese token
 * @access privado (JWT)
 */

routerTravel.get('/listTravels', jwtAuthMiddleware, getTravelsController);

//* ------------------- CONSEGUIR ALL TRAVELS ------------------
import { allTravelsController } from '@controller/travel/allTravels';

/**
 * @route GET /travels
 * @description Obtener todos los viajes registrados por ese token
 * @access privado (JWT)
 */

routerTravel.get('/listAllTravels', allTravelsController);
