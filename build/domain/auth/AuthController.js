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
exports.register = exports.login = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User_1 = __importDefault(require("./User"));
var userEnum_1 = require("./userEnum");
var generateToken = function (user) {
    var secrete = process.env.SECRET_KEY;
    var payload = {
        user: {
            id: user._id,
            name: user.name,
            role: user.role,
        },
    };
    return jsonwebtoken_1.default.sign(payload, secrete, {
        algorithm: 'HS256',
        expiresIn: 3600,
    });
};
var encryptPassword = function (password) {
    return bcryptjs_1.default.hash(password, 12);
};
var comparePassword = function (reqPassword, user) {
    return bcryptjs_1.default.compare(reqPassword, user.password);
};
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, isMatch, token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                email = req.body.email;
                return [4 /*yield*/, User_1.default.findOne({ email: email })];
            case 1:
                user = _a.sent();
                if (!user) {
                    res.status(401).json({
                        success: 'false',
                        message: 'Authentication failed',
                    });
                }
                return [4 /*yield*/, comparePassword(req.body.password, user)];
            case 2:
                isMatch = _a.sent();
                if (!isMatch) return [3 /*break*/, 4];
                return [4 /*yield*/, generateToken(user)];
            case 3:
                token = _a.sent();
                if (token) {
                    return [2 /*return*/, res.status(200).json({
                            status: 'success',
                            user: user,
                            token: token,
                        })];
                }
                res.status(401).json({
                    success: 'false',
                    message: 'Authentication failed',
                });
                _a.label = 4;
            case 4:
                res.status(401).json({
                    success: 'false',
                    message: 'Authentication failed',
                });
                return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                res.status(401).json({
                    success: 'false',
                    message: 'Authentication failed',
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var register = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var password, encryptedPassword, user, e_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                password = req.body.password;
                return [4 /*yield*/, encryptPassword(password)];
            case 1:
                encryptedPassword = _b.sent();
                return [4 /*yield*/, User_1.default.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: encryptedPassword,
                        address: req.body.address,
                        role: (_a = req.body.role) !== null && _a !== void 0 ? _a : userEnum_1.UserEnum.admin,
                    })];
            case 2:
                user = _b.sent();
                if (user) {
                    return [2 /*return*/, res.status(201).json({
                            status: 'success',
                            users: user,
                        })];
                }
                else {
                    res.status(400).json({
                        success: 'false',
                        message: 'cannot store user',
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                e_2 = _b.sent();
                res.status(400).json({
                    success: 'false',
                    message: e_2.message,
                    code: e_2.code,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
//# sourceMappingURL=AuthController.js.map