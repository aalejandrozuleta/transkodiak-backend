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

routerVehicle.post(
  '/createVehicle',
  jwtAuthMiddleware,
  createValidator,
  createVehicleController,
);

//* ------------------- CONSEGUIR VEHICULOS ------------------
import { getvehiclesController } from '@controller/vehicle/getVehicles';

/**
 * @route GET /transporters
 * @description Obtener todos los transportadores registrados
 * @access privado (JWT)
 */

routerVehicle.get('/listVehicles', jwtAuthMiddleware, getvehiclesController);

//* ----- DISABLE VEHICLE -----

import { disableController } from '@controller/vehicle/disable';
import { disableVehicleValidator } from '@middleware/validation/vehicle/disable';

/**
 * @route put /disable
 * @description Deshabilitar un transportador
 * @access Privado (JWT)
 *
 */

routerVehicle.put(
  '/disable/:id',
  jwtAuthMiddleware,
  disableVehicleValidator,
  disableController,
);

//* ------------------- CONSEGUIR VEHICULO ------------------

/**
 * @route GET / vehicle
 * @description Obtener el vehículo con la placa
 * @access privado (JWT)
 */
import { getInformationVehicleController } from '@controller/vehicle/getInformationVehicle';
import { getInformationVehicle } from '@middleware/validation/vehicle/getInformationVehicle';

routerVehicle.get(
  '/informationVehicle/:plate',
  jwtAuthMiddleware,
  getInformationVehicle,
  getInformationVehicleController,
);
