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
var MovieEnum_1 = require("./MovieEnum");
var movieSchema = new mongoose_1.Schema({
    name: field_1.rString,
    description: field_1.rString,
    duration: field_1.rString,
    year: field_1.rNumber,
    like: field_1.rNumber,
    rating: field_1.rNumber,
    tomato_rating: field_1.rNumber,
    genres: field_1.rArray,
    poster: field_1.rString,
    movie: field_1.uString,
    schedule: field_1.dArray,
    language: field_1.dEnum(MovieEnum_1.MovieLang, MovieEnum_1.MovieLang.en),
    delete_flag: field_1.dEnum(MovieEnum_1.MovieDeleteEnum, MovieEnum_1.MovieDeleteEnum.active),
    status: field_1.dEnum(MovieEnum_1.MovieStatus, MovieEnum_1.MovieStatus.list),
    uploader: field_1.uObject,
    uploaderUUID: field_1.uString,
}, { timestamps: true });
var Movie = mongoose_1.default.model('movies', movieSchema);
exports.default = Movie;
//# sourceMappingURL=Movie.js.map