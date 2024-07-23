import { createVehicleCompany } from '@interfaces/vehicleCompany/createVehicleCompany';
import { body, validationResult, ValidationChain } from 'express-validator';

const registerValidator: ValidationChain[] = [
  body('name')
    .notEmpty()
    .withMessage('El Nombre del transportador es requerido')
    .isAlpha('es-ES', { ignore: ' ' }) 
    .withMessage('El Nombre solo puede contener letras y espacios')
    .isLength({ min: 3, max: 50 })
    .withMessage('Nombre debe tener entre 3 y 50 caracteres'),

  body('idNumber')
    .notEmpty()
    .withMessage('La cédula es requerida')
    .isNumeric()
    .withMessage('La cédula solo puede contener números')
    .isLength({ min: 8, max: 10 })
    .withMessage('La cédula debe tener entre 8 y 10 dígitos'),

  body('email')
    .notEmpty()
    .withMessage('Correo electrónico es requerido')
    .isEmail()
    .withMessage('Correo electrónico no válido')
    .isLength({ min: 5, max: 50 })
    .withMessage('Correo electrónico debe tener entre 5 y 50 caracteres'),

  body('phone')
    .notEmpty()
    .withMessage('Teléfono es requerido')
    .matches(/^3\d{9}$/)
    .withMessage(
      'Teléfono debe ser numérico, tener 10 dígitos y comenzar con 3',
    ),

  body('license')
    .notEmpty()
    .withMessage('La licencia es requerida')
    .isLength({ min: 12, max: 12 })
    .withMessage('La licencia debe tener 12 dígitos'),

  body('password')
    .notEmpty()
    .withMessage('Contraseña es requerida')
    .isLength({ min: 8, max: 255 })
    .withMessage('Contraseña debe tener entre 8 y 255 caracteres')
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\s\S])/)
    .withMessage(
      'Contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial',
    ),
];

const validateUser = (data: createVehicleCompany) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { registerValidator, validateUser };
