"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ScheduleController_1 = require("./ScheduleController");
var checkPermission_1 = __importDefault(require("../../middleware/checkPermission"));
var userEnum_1 = require("../auth/userEnum");
var movieScheduleRoute = express_1.default.Router();
movieScheduleRoute.get('/movie-time/:moviePlayTime', ScheduleController_1.checkScheduleTime);
movieScheduleRoute.post('', [checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], ScheduleController_1.storeSchedule);
movieScheduleRoute.get('/:movieID', ScheduleController_1.fetchScheduleList);
movieScheduleRoute.post('/:scheduleUUID', ScheduleController_1.disableSchedule);
movieScheduleRoute.delete('/:scheduleUUID', ScheduleController_1.deleteSchedule);
exports.default = movieScheduleRoute;
//# sourceMappingURL=ScheduleRoute.js.map