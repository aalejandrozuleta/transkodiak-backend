import { getInformationVehicle } from '@interfaces/vehicle/getInformationVehicle';
import { validationResult, ValidationChain, param } from 'express-validator';

const getInformationVehicle: ValidationChain[] = [
  param('plate')
    .isString()
    .isLength({ min: 6, max: 6 })
    .matches(/^[a-zA-Z0-9]{6}$/)
    .withMessage(
      'El id debe ser un string de exactamente 6 dígitos o caracteres alfanuméricos',
    ),
];

const validateUser = (data: getInformationVehicle) => {
  const errors = validationResult(data);

  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { getInformationVehicle, validateUser };
