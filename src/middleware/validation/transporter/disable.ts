import { disableInterface } from '@interfaces/transpoter/disable';

import { validationResult, ValidationChain, param } from 'express-validator';

const disableValidator: ValidationChain[] = [
  param('id')
    .isInt({ gt: 0 })
    .withMessage('El id debe ser un número entero positivo'),
];

const validateUser = (data: disableInterface) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { disableValidator, validateUser };
