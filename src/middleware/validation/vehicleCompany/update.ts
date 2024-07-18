import { body, ValidationChain } from 'express-validator';

const updateValidator: ValidationChain[] = [

  body('name')
    .notEmpty()
    .withMessage('Nombre es requerido')
    .isAlpha()
    .withMessage('Nombre solo puede contener letras')
    .isLength({ min: 3, max: 50 })
    .withMessage('Nombre debe tener entre 3 y 50 caracteres'),

  body('phone')
    .notEmpty()
    .withMessage('Teléfono es requerido')
    .matches(/^3\d{9}$/)
    .withMessage(
      'Teléfono debe ser numérico, tener 10 dígitos y comenzar con 3',
    ),

  body('email')
    .notEmpty()
    .withMessage('Correo electrónico es requerido')
    .isEmail()
    .withMessage('Correo electrónico no válido')
    .isLength({ min: 5, max: 50 })
    .withMessage('Correo electrónico debe tener entre 5 y 50 caracteres'),

  body('address')
    .notEmpty()
    .withMessage('Dirección es requerida')
    .isLength({ min: 10, max: 100 })
    .withMessage('Dirección debe tener entre 10 y 100 caracteres'),
];

export { updateValidator };
