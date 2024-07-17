import express, { Router } from 'express';
export const routerGeneral: Router = express.Router();

//* ----- AUTH INTERMEDIARY --------------------------------

import { authController } from '@controller/general/auth';
import { authValidator } from '@middleware/validation/general/auth';

//* ----- Code ---------------------------------------------

import { codeForgetPasswordController } from '@controller/general/codeForgetPassword';
import { userValidationCode } from '@middleware/validation/general/codeForgetPassword';

/**
 * @route POST / Auth
 * @description Autenticar un usuario 
 * @access Público
 */

routerGeneral.post('/auth', authValidator, authController);

/**
 * @route POST / validationUser
 * @description Olvidar contraseña
 * @access Público
 */

routerGeneral.post("/getCode",userValidationCode,codeForgetPasswordController );