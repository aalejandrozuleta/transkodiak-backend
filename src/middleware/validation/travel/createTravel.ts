import { body, validationResult, ValidationChain } from 'express-validator';
import { createTravelInterface } from '@interfaces/Travel/createTravel';

const createTravelValidator: ValidationChain[] = [
  body('weight')
    .notEmpty()
    .withMessage('El peso es obligatorio')
    .isFloat({ min: 0.1 })
    .withMessage('El peso debe ser un número positivo mayor a 0'),

  body('origin')
    .notEmpty()
    .withMessage('El origen es obligatorio')
    .isString()
    .withMessage('El origen debe ser una cadena de texto')
    .isLength({ min: 3, max: 100 })
    .withMessage('El origen debe tener entre 3 y 100 caracteres'),

  body('destination')
    .notEmpty()
    .withMessage('El destino es obligatorio')
    .isString()
    .withMessage('El destino debe ser una cadena de texto')
    .isLength({ min: 3, max: 100 })
    .withMessage('El destino debe tener entre 3 y 100 caracteres'),

  body('payment')
    .notEmpty()
    .withMessage('El pago es obligatorio')
    .isFloat({ min: 0 })
    .withMessage('El pago debe ser un número positivo'),

  body('description')
    .optional()
    .isString()
    .withMessage('La descripción debe ser una cadena de texto')
    .isLength({ max: 255 })
    .withMessage('La descripción no debe exceder los 255 caracteres'),

  body('departureDate')
    .notEmpty()
    .withMessage('La fecha de salida es obligatoria')
    .isISO8601()
    .withMessage('La fecha de salida debe tener un formato de fecha válido'),

  body('deliverDate')
    .notEmpty()
    .withMessage('La fecha de entrega es obligatoria')
    .isISO8601()
    .withMessage('La fecha de entrega debe tener un formato de fecha válido')
    .custom((value, { req }) => {
      const departureDate = new Date(req.body.departureDate);
      const deliverDate = new Date(value);
      if (deliverDate <= departureDate) {
        throw new Error('La fecha de entrega debe ser posterior a la fecha de salida');
      }
      return true;
    }),
];

const validateTravel = (data: createTravelInterface) => {
  const errors = validationResult(data);
  
  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { createTravelValidator, validateTravel };
