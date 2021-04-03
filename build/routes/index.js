"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var AuthRoute_1 = __importDefault(require("../domain/auth/AuthRoute"));
var MovieRoute_1 = __importDefault(require("../domain/movie/MovieRoute"));
var ScheduleRoute_1 = __importDefault(require("../domain/schedule/ScheduleRoute"));
var UserRoute_1 = __importDefault(require("../domain/user/UserRoute"));
var SuggestionRoute_1 = __importDefault(require("../domain/suggestion/SuggestionRoute"));
var DonationRoute_1 = __importDefault(require("../domain/paypal/DonationRoute"));
var router = express.Router();
//apis
router.use('/api/auth', AuthRoute_1.default);
router.use('/api/users', UserRoute_1.default);
router.use('/api/movie/', MovieRoute_1.default);
router.use('/api/schedule/movie', ScheduleRoute_1.default);
router.use('/api/suggestion/', SuggestionRoute_1.default);
router.use('/api/donation/', DonationRoute_1.default);
//by default routes
router.get('/', function (req, res) {
    res.send({
        message: 'Backend of Movie App. ',
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map