import { authInterface } from '@interfaces/vehicleCompany/auth';
import { body, validationResult, ValidationChain } from 'express-validator';

const authValidator: ValidationChain[] = [
  body('email')
    .notEmpty()
    .withMessage('Correo electrónico es requerido')
    .isEmail()
    .withMessage('Correo electrónico no válido')
    .isLength({ min: 5, max: 50 })
    .withMessage('Correo electrónico debe tener entre 5 y 50 caracteres'),

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
const validateUser = (data: authInterface) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { authValidator, validateUser };
