import express, { Router } from 'express';
export const routerGeneral: Router = express.Router();

//* ----- AUTH INTERMEDIARY --------------------------------

import { authController } from '@controller/general/auth';
import { authValidator } from '@middleware/validation/general/auth';

/**
 * @route POST / Auth
 * @description Autenticar un usuario 
 * @access Público
 */

routerGeneral.post('/auth', authValidator, authController);
