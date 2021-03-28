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
exports.deleteMovie = exports.updateMovie = exports.storeMovie = exports.fetchMovie = exports.fetchCurrentMovie = void 0;
var Movie_1 = __importDefault(require("./Movie"));
var MovieEnum_1 = require("./MovieEnum");
var fetchCurrentMovie = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var current_movie, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Movie_1.default.findOne({ status: MovieEnum_1.MovieStatus.current })];
            case 1:
                current_movie = _a.sent();
                console.log(current_movie);
                if (current_movie) {
                    return [2 /*return*/, res.status(200).json({
                            status: 'success',
                            current_movie: current_movie,
                        })];
                }
                else {
                    res.status(400).json({
                        success: 'false',
                        message: 'No Current Movie',
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                res.status(400).json({
                    success: 'false',
                    message: e_1.message,
                    code: e_1.code,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.fetchCurrentMovie = fetchCurrentMovie;
var fetchMovie = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Movie_1.default.find()];
            case 1:
                movie = _a.sent();
                if (movie) {
                    return [2 /*return*/, res.status(200).json({
                            status: 'success',
                            movie: movie,
                        })];
                }
                else {
                    res.status(400).json({
                        success: 'false',
                        message: 'No Movie',
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
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
exports.fetchMovie = fetchMovie;
var storeMovie = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Movie_1.default.create(req.body)];
            case 1:
                movie = _a.sent();
                if (movie) {
                    return [2 /*return*/, res.status(201).json({
                            status: 'success',
                            movie: movie,
                        })];
                }
                else {
                    res.status(400).json({
                        success: 'false',
                        message: 'cannot store movie',
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(400).json({
                    success: 'false',
                    message: e_3.message,
                    code: e_3.code,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.storeMovie = storeMovie;
var updateMovie = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var movieUUID, movie, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                movieUUID = req.params.movieUUID;
                console.log(movieUUID);
                return [4 /*yield*/, Movie_1.default.findOneAndUpdate({ _id: movieUUID }, req.body)];
            case 1:
                movie = _a.sent();
                if (movie) {
                    return [2 /*return*/, res.status(201).json({
                            status: 'success',
                            movie: movie,
                        })];
                }
                else {
                    res.status(400).json({
                        success: 'false',
                        message: 'cannot store movie',
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(400).json({
                    success: 'false',
                    message: e_4.message,
                    code: e_4.code,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateMovie = updateMovie;
var deleteMovie = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var movieUUID, movie, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                movieUUID = req.params.movieUUID;
                return [4 /*yield*/, Movie_1.default.findOneAndRemove({ _id: movieUUID })];
            case 1:
                movie = _a.sent();
                if (movie) {
                    return [2 /*return*/, res.status(201).json({
                            status: 'success',
                            movie: movie,
                        })];
                }
                else {
                    res.status(400).json({
                        success: 'false',
                        message: 'cannot delete movie',
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(400).json({
                    success: 'false',
                    message: e_5.message,
                    code: e_5.code,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteMovie = deleteMovie;
//# sourceMappingURL=MovieController.js.map