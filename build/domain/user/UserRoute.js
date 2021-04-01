"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = require("./UserController");
var validateToken_1 = __importDefault(require("../../middleware/validateToken"));
var checkPermission_1 = __importDefault(require("../../middleware/checkPermission"));
var userEnum_1 = require("../auth/userEnum");
var userRoute = express_1.default.Router();
//USER LOGIN
userRoute.get('', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.super_admin])], UserController_1.getUsers);
userRoute.post('/:userUUID', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.super_admin])], UserController_1.updateUser);
userRoute.delete('/:userUUID', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.super_admin])], UserController_1.deleteUser);
exports.default = userRoute;
//# sourceMappingURL=UserRoute.js.map