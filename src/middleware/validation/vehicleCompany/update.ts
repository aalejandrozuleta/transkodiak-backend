import { body, param, ValidationChain } from 'express-validator';

const updateValidator: ValidationChain[] = [
  param('nit')
    .notEmpty()
    .withMessage('NIT es requerido')
    .isNumeric()
    .withMessage('NIT debe ser numérico')
    .isLength({ min: 9, max: 9 })
    .withMessage('NIT debe tener 9 dígitos'),

  body('name')
    .optional()
    .isAlpha()
    .withMessage('Nombre solo puede contener letras')
    .isLength({ min: 3, max: 50 })
    .withMessage('Nombre debe tener entre 3 y 50 caracteres'),

  body('phone')
    .optional()
    .matches(/^3\d{9}$/)
    .withMessage(
      'Teléfono debe ser numérico, tener 10 dígitos y comenzar con 3',
    ),

  body('email')
    .optional()
    .isEmail()
    .withMessage('Correo electrónico no válido')
    .isLength({ min: 5, max: 50 })
    .withMessage('Correo electrónico debe tener entre 5 y 50 caracteres'),

  body('address')
    .optional()
    .isLength({ min: 10, max: 100 })
    .withMessage('Dirección debe tener entre 10 y 100 caracteres')
];

export { updateValidator };
