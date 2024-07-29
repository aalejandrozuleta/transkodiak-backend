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

///* ----- UPDATE VEHICLE COMPANY -----
import { updateValidator } from '@middleware/validation/vehicleCompany/update';
import { authenticateToken } from '@middleware/validation/vehicleCompany/autenticateToken';
import { updateController } from '@controller/vehicleCompany/update';

/**
 * @route PUT /update
 * @description Actualizar un usuario de la compañía de vehículos
 * @access Privado
 */
routerVehicleCompany.put('/update', authenticateToken, updateValidator, updateController);