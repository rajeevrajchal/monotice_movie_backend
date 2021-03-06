"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSchedule = exports.disableSchedule = exports.checkScheduleTime = exports.fetchScheduleList = exports.storeSchedule = void 0;
var Movie_1 = __importDefault(require("../movie/Movie"));
var Schedule_1 = __importDefault(require("./Schedule"));
var storeSchedule = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var scheduleInfo, movieUUID, response, schedule, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                scheduleInfo = {
                    time: req.body.slot,
                    status: req.body.status,
                };
                movieUUID = req.body.movieUUID;
                return [4 /*yield*/, Movie_1.default.findByIdAndUpdate(movieUUID, {
                        $addToSet: {
                            schedule: [scheduleInfo],
                        },
                    })];
            case 1:
                response = _a.sent();
                if (!response) return [3 /*break*/, 3];
                return [4 /*yield*/, Schedule_1.default.create(req.body)];
            case 2:
                schedule = _a.sent();
                if (schedule) {
                    return [2 /*return*/, res.status(201).json({
                            status: 'success',
                            schedule_movie: schedule,
                        })];
                }
                else {
                    res.status(400).json({
                        success: 'false',
                        message: 'No Time slot can acquired.',
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                res.status(400).json({
                    success: 'false',
                    message: 'No Time slot can acquired.',
                });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                res.status(400).json({
                    success: 'false',
                    message: e_1.message,
                    code: e_1.code,
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.storeSchedule = storeSchedule;
var fetchScheduleList = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var movieID, currentMovieSchedule, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                movieID = req.params.movieID;
                return [4 /*yield*/, Schedule_1.default.find({ movieUUID: movieID })];
            case 1:
                currentMovieSchedule = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 'success',
                        currentMovieSchedule: currentMovieSchedule,
                    })];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                res.status(400).json({
                    success: 'false',
                    message: e_2.message,
                    code: e_2.code,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.fetchScheduleList = fetchScheduleList;
var checkScheduleTime = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var moviePlayTime, currentDate, exceedTime;
    return __generator(this, function (_a) {
        try {
            moviePlayTime = req.params.moviePlayTime;
            currentDate = new Date();
            console.log(Date.parse(currentDate));
            console.log(Date.parse(moviePlayTime));
            if (Date.parse(currentDate) >= Date.parse(moviePlayTime)) {
                exceedTime = Math.abs(Date.parse(currentDate) - Date.parse(moviePlayTime));
                res.status(200).json({
                    success: true,
                    message: 'Movie Play Time is exceed ',
                    exceedTime: exceedTime,
                });
            }
            else {
                res.status(200).json({
                    success: false,
                    message: 'Movie Time is not approaching ',
                });
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).json({
                success: false,
                message: e.message,
                code: e.code,
            });
        }
        return [2 /*return*/];
    });
}); };
exports.checkScheduleTime = checkScheduleTime;
var disableSchedule = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var scheduleUUID, object, _a, slot, movieUUID, schedule, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                scheduleUUID = req.params.scheduleUUID;
                object = req.body;
                console.log(object);
                _a = req.body, slot = _a.slot, movieUUID = _a.movieUUID;
                return [4 /*yield*/, Schedule_1.default.findOneAndUpdate({ _id: scheduleUUID }, req.body)];
            case 1:
                schedule = _b.sent();
                console.log(schedule);
                return [4 /*yield*/, Movie_1.default.updateOne({ _id: movieUUID, 'schedule.time': slot }, {
                        $set: {
                            'schedule.$.status': object.status,
                        },
                    })];
            case 2:
                _b.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 'success',
                        currentMovieSchedule: schedule,
                    })];
            case 3:
                e_3 = _b.sent();
                console.log(e_3);
                res.status(400).json({
                    success: false,
                    message: e_3.message,
                    code: e_3.code,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.disableSchedule = disableSchedule;
var deleteSchedule = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var scheduleUUID, schedule, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                scheduleUUID = req.params.scheduleUUID;
                return [4 /*yield*/, Schedule_1.default.findOneAndRemove({ _id: scheduleUUID })];
            case 1:
                schedule = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 'success',
                        currentMovieSchedule: schedule,
                    })];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                res.status(400).json({
                    success: false,
                    message: e_4.message,
                    code: e_4.code,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteSchedule = deleteSchedule;
//# sourceMappingURL=ScheduleController.js.map