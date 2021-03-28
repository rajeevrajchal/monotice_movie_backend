"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = exports.loginValidation = void 0;
var express_validator_1 = require("express-validator");
exports.loginValidation = [
    express_validator_1.check('password').not().isEmpty().withMessage('Password is required.'),
    express_validator_1.check('email').isEmail().withMessage('Email is not correct').normalizeEmail(),
];
exports.registerValidation = [
    express_validator_1.check('name').not().isEmpty().withMessage('Name is required.'),
    express_validator_1.check('password').not().isEmpty().withMessage('Password is required.'),
    express_validator_1.check('email').isEmail().withMessage('Email is not correct').normalizeEmail(),
];
//# sourceMappingURL=authValidation.js.map