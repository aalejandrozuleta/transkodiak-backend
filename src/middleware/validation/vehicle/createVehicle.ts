import { createVehicle } from '@interfaces/vehicle/createVehicle';
import { body, validationResult, ValidationChain } from 'express-validator';

const createValidator: ValidationChain[] = [
  body('license_plate')
    .notEmpty()
    .withMessage('La placa del vehículo es obligatoria')
    .matches(/^[A-Z]{3}-\d{3}$/)
    .withMessage(
      'La placa del vehículo debe conllevar 3 letras en mayuscula seguidas de un - y los 3 numeros. Ej: AAA-123',
    ),

  body('capacity')
    .notEmpty()
    .withMessage('La capacidad es obligatoria')
    .isInt({ min: 1 })
    .withMessage('La capacidad debe ser un número entero positivo '),

  body('vehicle_type')
    .notEmpty()
    .withMessage('El tipo de vehículo es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('El tipo de vehículo solo puede contener letras y espacios')
    .isLength({ min: 3, max: 50 })
    .withMessage('El tipo de vehículo debe tener entre 3 y 50 caracteres'),

  body('load_type')
    .notEmpty()
    .withMessage('El tipo de carga es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('El tipo de carga solo puede contener letras y espacios')
    .isLength({ min: 3, max: 50 })
    .withMessage('El tipo de carga debe tener entre 3 y 50 caracteres'),

  body('model')
    .notEmpty()
    .withMessage('El modelo del carro es obligatorio')
    .isAlphanumeric('es-ES', { ignore: ' ' })
    .withMessage(
      'El modelo del carro solo puede contener letras, números y espacios',
    )
    .isLength({ min: 2, max: 30 })
    .withMessage('El modelo del carro debe tener entre 2 y 30 caracteres'),

  body('brand')
    .notEmpty()
    .withMessage('La marca del carro es obligatoria')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('La marca del carro solo puede contener letras y espacios')
    .isLength({ min: 2, max: 50 })
    .withMessage('La marca del carro debe tener entre 2 y 50 caracteres'),
];

const validateVehicle = (data: createVehicle) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { createValidator, validateVehicle };
