import express, { Router } from 'express';
export const routerVehicleCompany: Router = express.Router();

//* ----- REGISTER VEHICLE COMPANY -----
import { registerValidator } from '@middleware/validation/vehicleCompany/register';
import { registerController } from '@controller/vehicleCompany/register';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerVehicleCompany.post('/register', registerValidator, registerController);

//* ----- AUTH VEHICLE COMPANY -----
import { authController } from '@controller/vehicleCompany/auth';
import { authValidator } from '@middleware/validation/vehicleCompany/auth';

/**
 * @route POST / Auth
 * @description Autenticar un usuario de la compañía de vehículos
 * @access Público
 */

routerVehicleCompany.post('/auth', authValidator, authController);
