import express, { Router } from 'express';
export const routerTransporter: Router = express.Router();

//* ----- REGISTER VEHICLE COMPANY -----
import { registerValidator } from '@middleware/validation/transporter/register';
import { registerController } from '@controller/transporter/register';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerTransporter.post('/register', registerValidator, registerController); 


//* ----- GET TRANSPORTERS --------------------------------

import { getTransportersController } from '@controller/transporter/getTransporters';

/**
 * @route GET /transporters
 * @description Obtener todos los transportadores registrados
 * @access Público
 */

routerTransporter.get('/listTransporters', getTransportersController);
