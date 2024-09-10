import express, { Router } from 'express';
export const routerTransporter: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

//* ----- REGISTER VEHICLE COMPANY -----
import { registerValidator } from '@middleware/validation/transporter/register';
import { registerController } from '@controller/transporter/register';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerTransporter.post(
  '/register',
  jwtAuthMiddleware,
  registerValidator,
  registerController,
);

//* ----- GET TRANSPORTERS --------------------------------

import { getTransportersController } from '@controller/transporter/getTransporter';

/**
 * @route GET /transporters
 * @description Obtener todos los transportadores registrados
 * @access privado (JWT)
 */

routerTransporter.get(
  '/listTransporters',
  jwtAuthMiddleware,
  getTransportersController,
);

//* ----- DISABLE TRANSPORTER -----

import { disableController } from '@controller/transporter/disable';
import { disableValidator } from '@middleware/validation/transporter/disable';

/**
 * @route put /disable
 * @description Deshabilitar un transportador
 * @access Privado (JWT)
 *
 */

routerTransporter.put(
  '/disable/:id',
  jwtAuthMiddleware,
  disableValidator,
  disableController,
);

//* ----- HISTORY TRANSPORTER -----
import { historyTravelController } from '@controller/transporter/historyTravel';

/**
 * @route GET /history
 * @description Conseguir el historial
 * @access Privado (JWT)
 *
 */

routerTransporter.get('/history', jwtAuthMiddleware, historyTravelController);

//* ----- INFORMATION TRANSPORTER -----
import { getInformationTransporterController } from '@controller/transporter/getInformation';
import { getInformationTransporter } from '@middleware/validation/transporter/getInformation';

/**
 * @route GET / informationTransporter
 * @description Conseguir información del transportador
 * @access Privado (JWT)
 *
 */

routerTransporter.get('/informationTransporter/:id', jwtAuthMiddleware,getInformationTransporter, getInformationTransporterController);