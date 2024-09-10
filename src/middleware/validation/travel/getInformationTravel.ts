import { getInformationTravel } from '@interfaces/transpoter/getInformationTravel';
import { validationResult, ValidationChain, param } from 'express-validator';

const getInformationTravel: ValidationChain[] = [
  param('id')
    .isInt({ gt: 0 })
    .withMessage('El id debe ser un número entero positivo'),
];

const validateUser = (data: getInformationTravel) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { getInformationTravel, validateUser };
