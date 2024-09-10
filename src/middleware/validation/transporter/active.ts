import { validationResult, ValidationChain, param } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const activeValidator: ValidationChain[] = [
  param('id')
    .isInt({ gt: 0 })
    .withMessage('El id debe ser un número entero positivo'),
];

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export { activeValidator, validateUser };
