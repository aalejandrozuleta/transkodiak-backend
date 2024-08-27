import { ValidationChain, param } from 'express-validator';

const disableVehicleValidator: ValidationChain[] = [
  param('id')
    .isString()
    .isLength({ max: 10 })
    .withMessage(
      'La placa debe ser una cadena de texto de hasta 10 caracteres',
    ),
];

export { disableVehicleValidator };
