"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var checkPermission_1 = __importDefault(require("../../middleware/checkPermission"));
var userEnum_1 = require("../auth/userEnum");
var MovieController_1 = require("./MovieController");
var validateToken_1 = __importDefault(require("../../middleware/validateToken"));
var movieRoute = express_1.default.Router();
//USER LOGIN
// authRoute.post('/admin-movie', [checkPermission([UserEnum.admin, UserEnum.super_admin])], fetchMovie);
movieRoute.get('', MovieController_1.fetchCurrentMovie);
movieRoute.get('/movie-list', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], MovieController_1.fetchMovie);
movieRoute.post('', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], MovieController_1.storeMovie);
movieRoute.post('/:movieUUID', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], MovieController_1.updateMovie);
movieRoute.delete('/:movieUUID', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], MovieController_1.deleteMovie);
exports.default = movieRoute;
//# sourceMappingURL=MovieRoute.js.map