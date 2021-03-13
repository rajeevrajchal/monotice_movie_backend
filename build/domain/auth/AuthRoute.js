"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validation_1 = __importDefault(require("../../validation"));
var authValidation_1 = require("./authValidation");
var AuthController_1 = require("./AuthController");
var authRoute = express_1.default.Router();
//USER LOGIN
authRoute.post('/login', [validation_1.default, authValidation_1.loginValidation], AuthController_1.login);
authRoute.post('/register', [validation_1.default, authValidation_1.registerValidation], AuthController_1.register);
exports.default = authRoute;
//# sourceMappingURL=AuthRoute.js.map