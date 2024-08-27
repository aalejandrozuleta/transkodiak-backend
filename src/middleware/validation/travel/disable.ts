import { disableTravelInterface } from '@interfaces/Travel/disable';
import { validationResult, ValidationChain, param } from 'express-validator';

const disableTravelValidator: ValidationChain[] = [
  param('id')
    .isInt({ gt: 0 })
    .withMessage('El id debe ser un número entero positivo'),
];

const validateUser = (data: disableTravelInterface) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { disableTravelValidator, validateUser };
