"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var checkPermission_1 = __importDefault(require("../../middleware/checkPermission"));
var userEnum_1 = require("../auth/userEnum");
var ScheduleController_1 = require("./ScheduleController");
var scheduleRoute = express_1.default.Router();
//USER LOGIN
// authRoute.post('/admin-movie', [checkPermission([UserEnum.admin, UserEnum.super_admin])], fetchMovie);
scheduleRoute.post('', [checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], ScheduleController_1.storeSchedule);
scheduleRoute.get('/:movieID', ScheduleController_1.fetchScheduleList);
exports.default = scheduleRoute;
//# sourceMappingURL=ScheduleRoute.js.map