import express, { Router } from 'express';
export const routerIntermediary: Router = express.Router();

//* ----- REGISTER INTERMEDIARY   -----
import { registerValidator } from '@middleware/validation/intermediary/register';
import { registerController } from '@controller/intermediary/register';

/**
 * @route POST /register
 * @description Registrar un nuevo usuario de la compañía de vehículos
 * @access Público
 */

routerIntermediary.post('/register', registerValidator, registerController);

