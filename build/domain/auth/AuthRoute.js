"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validation_1 = __importDefault(require("../../validation"));
var authValidation_1 = require("./authValidation");
var AuthController_1 = require("./AuthController");
var validateToken_1 = __importDefault(require("../../middleware/validateToken"));
var checkPermission_1 = __importDefault(require("../../middleware/checkPermission"));
var userEnum_1 = require("./userEnum");
var authRoute = express_1.default.Router();
//USER LOGIN
authRoute.post('/login', [validation_1.default, authValidation_1.loginValidation], AuthController_1.login);
authRoute.post('/register', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin]), validation_1.default, authValidation_1.registerValidation], AuthController_1.register);
exports.default = authRoute;
//# sourceMappingURL=AuthRoute.js.map