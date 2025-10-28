import { param, validationResult } from 'express-validator';

export const validateId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('ID must be a number')
    .bail()
    .toInt(),
    
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({
          error: 'Validation failed',
          details: errors.array().map((err) => err.msg),
        });
    }
    next();
  },
];

