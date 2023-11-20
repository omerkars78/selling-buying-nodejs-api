// validationMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function validationMiddleware(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }
    next();
  };
}
