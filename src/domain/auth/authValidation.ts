import { check } from 'express-validator';
import { $FIXME } from '../../constant';

export const loginValidation: $FIXME = [
  check('password').not().isEmpty().withMessage('Password is required.'),
  check('email').isEmail().withMessage('Email is not correct').normalizeEmail(),
];

export const registerValidation: $FIXME = [
  check('name').not().isEmpty().withMessage('Name is required.'),
  check('password').not().isEmpty().withMessage('Password is required.'),
  check('email').isEmail().withMessage('Email is not correct').normalizeEmail(),
];
