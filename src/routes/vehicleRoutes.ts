import express, { Router } from 'express';
export const routerVehicle: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

//* ----- CREATE VEHICLE-----
import { createValidator } from '@middleware/validation/vehicle/createVehicle';
import { createVehicleController } from '@controller/vehicle/createVehicle';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerVehicle.post('/createVehicle',jwtAuthMiddleware, createValidator, createVehicleController);
