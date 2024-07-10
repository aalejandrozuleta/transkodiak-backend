import express, { Router } from 'express';
export const routerIntermediary: Router = express.Router();

//* ----- REGISTER VEHICLE COMPANY -----
import { registerValidator } from '@middleware/validation/vehicleCompany/register';
import { registerController } from '@controller/vehicleCompany/register';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerIntermediary.post('/register', registerValidator, registerController);
