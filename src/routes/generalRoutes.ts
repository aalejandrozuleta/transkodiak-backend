import express, { Router } from 'express';
export const routerGeneral: Router = express.Router();

//* ----- AUTH INTERMEDIARY --------------------------------

import { authController } from '@controller/general/auth';
import { authValidator } from '@middleware/validation/general/auth';

//* ----- Code ---------------------------------------------

import { codeForgetPasswordController } from '@controller/general/codeForgetPassword';
import { userValidationCode } from '@middleware/validation/general/codeForgetPassword';

//* ----- FORGET PASSWORD ------------------------------------
import { forgetPasswordController } from '@controller/general/forgetPassword';

//* ----- chatBot -------------------------------------
import { chatBotController } from '@controller/general/chatBot';
import upload from '@middleware/logic/multer';

//* ----- upload img --------------------------------
import { jwtAuthMiddleware } from '@middleware/logic/jwtValidation';
import { uploadImageController } from '@controller/general/uploadImage';

//* ----- statics --------------------------------
import { statisticsController } from '@controller/general/statistics';

/**
 * @route POST / Auth
 * @description Autenticar un usuario
 * @access Público
 */

routerGeneral.post('/auth', authValidator, authController);

/**
 * @route POST / validationUser
 * @description Obtener codigo para olvidar clave
 * @access Público
 */

routerGeneral.post(
  '/getCode',
  userValidationCode,
  codeForgetPasswordController,
);

/**
 * @route PUT / cambiar clave
 * @description cambiar clave con código
 * @access Público
 */

routerGeneral.put('/forgetPassword', forgetPasswordController);

/**
 * @route POST / chatBot
 * @description Hablar con el chatBot
 * @access Público
 */

routerGeneral.post('/chatBot', chatBotController);

/**
 * @route POST / subir imagen
 * @description Subir una imagen al contenedor de azure
 * @access private
 */

routerGeneral.post(
  '/uploadImage',
  upload.single('file'),
  jwtAuthMiddleware,
  uploadImageController,
);

routerGeneral.get('/statics', jwtAuthMiddleware, statisticsController);
