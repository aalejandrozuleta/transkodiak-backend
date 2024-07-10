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

//* ----- AUTH INTERMEDIARY --------------------------------

import { authController } from 'controllers/intermediary/auth';
import { authValidator } from 'middleware/validation/intermediary/auth';

/**
 * @route POST / Auth
 * @description Autenticar un usuario de la compañía de vehículos
 * @access Público
 */

routerIntermediary.post('/auth', authValidator, authController);
