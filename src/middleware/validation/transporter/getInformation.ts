import { getInformationTransporter } from '@interfaces/transpoter/getInformation';
import { validationResult, ValidationChain, param } from 'express-validator';

const getInformationTransporter: ValidationChain[] = [
  param('id')
    .isInt({ gt: 0 })
    .withMessage('El id debe ser un número entero positivo'),
];

const validateUser = (data: getInformationTransporter) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { getInformationTransporter, validateUser };
