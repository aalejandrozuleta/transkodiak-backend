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