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
