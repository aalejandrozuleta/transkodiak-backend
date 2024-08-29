import express, { Router } from 'express';
export const routerIntermediary: Router = express.Router();
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';

//* ----- REGISTER INTERMEDIARY   -----
import { registerValidator } from '@middleware/validation/intermediary/register';
import { registerController } from '@controller/intermediary/register';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerIntermediary.post('/register', registerValidator, registerController);


///* ----- GET INFORMATION INTERMEDIARY -----

import { getInformationController } from '@controller/intermediary/getInformation';

/**
 * @route GET / getInformation
 * @description COnsigue la información de la empresa vehicular
 * @access Privado
 */

routerIntermediary.get(
  '/getInformation',
  jwtAuthMiddleware,
  getInformationController
);