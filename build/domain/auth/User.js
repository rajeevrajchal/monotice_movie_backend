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
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var field_1 = require("../../utils/field");
var userEnum_1 = require("./userEnum");
var userSchema = new mongoose_1.Schema({
    name: field_1.rString,
    email: field_1.urEmail,
    password: field_1.rString,
    address: field_1.uString,
    role: field_1.dEnum(userEnum_1.UserEnum, userEnum_1.UserEnum.admin),
}, { timestamps: true });
var User = mongoose_1.default.model('users', userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map