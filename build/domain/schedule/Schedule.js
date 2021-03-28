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
var ScheduleEnum_1 = require("./ScheduleEnum");
var scheduleSchema = new mongoose_1.Schema({
    slot: field_1.rString,
    status: field_1.dEnum(ScheduleEnum_1.ScheduleStatus, ScheduleEnum_1.ScheduleStatus.deactivate),
    uploader: field_1.uObject,
    movieUUID: field_1.uString,
    uploaderUUID: field_1.uString,
}, { timestamps: true });
var Schedule = mongoose_1.default.model('schedule', scheduleSchema);
exports.default = Schedule;
//# sourceMappingURL=Schedule.js.map