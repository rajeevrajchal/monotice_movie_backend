"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieStatus = exports.MovieLang = exports.MovieDeleteEnum = void 0;
var MovieDeleteEnum;
(function (MovieDeleteEnum) {
    MovieDeleteEnum[MovieDeleteEnum["active"] = 0] = "active";
    MovieDeleteEnum[MovieDeleteEnum["delete"] = 1] = "delete";
})(MovieDeleteEnum = exports.MovieDeleteEnum || (exports.MovieDeleteEnum = {}));
var MovieLang;
(function (MovieLang) {
    MovieLang[MovieLang["en"] = 0] = "en";
    MovieLang[MovieLang["np"] = 1] = "np";
})(MovieLang = exports.MovieLang || (exports.MovieLang = {}));
var MovieStatus;
(function (MovieStatus) {
    MovieStatus[MovieStatus["list"] = 0] = "list";
    MovieStatus[MovieStatus["current"] = 1] = "current";
})(MovieStatus = exports.MovieStatus || (exports.MovieStatus = {}));
//# sourceMappingURL=MovieEnum.js.map