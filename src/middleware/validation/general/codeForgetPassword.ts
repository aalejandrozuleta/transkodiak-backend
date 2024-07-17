import { getCodeForgetInterface } from '@interfaces/general/codeForgetPassword';
import { body, validationResult, ValidationChain } from 'express-validator';

const userValidationCode: ValidationChain[] = [
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
];

const validateUser = (date: getCodeForgetInterface) => {
  const errors = validationResult(date);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { userValidationCode, validateUser };
