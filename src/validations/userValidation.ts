import { body } from 'express-validator';

export const registerValidation = [
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
