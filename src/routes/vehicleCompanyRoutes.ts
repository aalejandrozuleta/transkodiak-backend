import express, { Router } from 'express';
export const routerVehicleCompany: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

//* ----- REGISTER VEHICLE COMPANY -----
import { registerValidator } from '@middleware/validation/vehicleCompany/register';
import { registerController } from '@controller/vehicleCompany/register';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerVehicleCompany.post('/register', registerValidator, registerController);

///* ----- UPDATE VEHICLE COMPANY -----
import { updateValidator } from '@middleware/validation/vehicleCompany/update';
import { updateController } from '@controller/vehicleCompany/update';

/**
 * @route PUT /update
 * @description Actualizar un usuario de la compañía de vehículos
 * @access Privado
 */
routerVehicleCompany.put(
  '/update',
  jwtAuthMiddleware,
  updateValidator,
  updateController,
);

///* ----- GEt VEHICLE COMPANY -----

import { getInformationController } from '@controller/vehicleCompany/getInformation';

/**
 * @route GET / getInformation
 * @description Consigue la información de la empresa vehicular
 * @access Privado
 */

routerVehicleCompany.get(
  '/getInformation',
  jwtAuthMiddleware,
  getInformationController,
);

/**
 * @route GET / getDisabledTransporter
 * @description COnsigue la información de los usuarios deshabilitados
 * @access Privado
 */
import { getDisabledController } from '@controller/vehicleCompany/getDisable';

routerVehicleCompany.get(
  '/getDisabledTransporter',
  jwtAuthMiddleware,
  getDisabledController,
);

//123456739
