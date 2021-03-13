"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
var express_validator_1 = require("express-validator");
exports.loginValidation = [express_validator_1.check('email').isEmail().withMessage('Email is not correct').normalizeEmail()];
//# sourceMappingURL=authValidation.js.map