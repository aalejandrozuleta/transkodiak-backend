import { createVehicleCompany } from '@interfaces/vehicleCompany/createVehicleCompany';
import { body, validationResult, ValidationChain } from 'express-validator';

const registerValidator: ValidationChain[] = [
  body('name')
    .notEmpty()
    .withMessage('El Nombre del transportador es requerido')
    .isAlpha()
    .withMessage('El Nombre solo puede contener letras')
    .isLength({ min: 3, max: 50 })
    .withMessage('Nombre debe tener entre 3 y 50 caracteres'), 

  body('idNumber')
    .notEmpty()
    .withMessage('la cedula es requerido')
    .isNumeric()
    .withMessage(' La cedula solo puede contener numeros')
    .isLength({ min: 8, max: 10 })
    .withMessage(' debe tener un rango entre 8 a 10 digitos'),

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
    .withMessage('La licencia debe tener 12 numeros'),

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

const validateUser = (data: createVehicleCompany) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { registerValidator, validateUser };
