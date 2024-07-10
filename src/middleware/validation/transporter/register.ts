import { createTransporter } from '@interfaces/transporter/createTransporter';
import { body, validationResult, ValidationChain } from 'express-validator';

const registerValidator: ValidationChain[] = [

  body('name')
    .notEmpty()
    .withMessage('Nombre es requerido')
    .isAlpha()
    .withMessage('Nombre solo puede contener letras')
    .isLength({ min: 3, max: 50 })
    .withMessage('Nombre debe tener entre 3 y 50 caracteres'),

    body('idNumber')
    .notEmpty()
    .withMessage('NIT es requerido')
    .isNumeric()
    .withMessage('NIT debe ser numérico')
    .isLength({ min: 9, max: 9 })
    .withMessage('NIT debe tener 9 dígitos'),

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

  body('password')
    .notEmpty()
    .withMessage('Contraseña es requerida')
    .isLength({ min: 8, max: 255 })
    .withMessage('Contraseña debe tener entre 8 y 255 caracteres')
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/)
    .withMessage(
      'Contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial',
    ),
];

const validateUser = (data: createTransporter) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { registerValidator, validateUser };
