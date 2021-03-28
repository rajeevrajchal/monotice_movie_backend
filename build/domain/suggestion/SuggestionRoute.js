"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var SuggestionController_1 = require("./SuggestionController");
var validateToken_1 = __importDefault(require("../../middleware/validateToken"));
var checkPermission_1 = __importDefault(require("../../middleware/checkPermission"));
var userEnum_1 = require("../auth/userEnum");
var suggestionRoute = express_1.default.Router();
suggestionRoute.post('', SuggestionController_1.storeSuggestion);
suggestionRoute.get('', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], SuggestionController_1.fetchSuggestion);
suggestionRoute.delete('/:suggestionUUID', [validateToken_1.default, checkPermission_1.default([userEnum_1.UserEnum.admin, userEnum_1.UserEnum.super_admin])], SuggestionController_1.deleteSuggestion);
exports.default = suggestionRoute;
//# sourceMappingURL=SuggestionRoute.js.map