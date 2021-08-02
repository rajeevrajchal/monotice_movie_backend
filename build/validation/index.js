"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var validateRule = function (req, res, next) {
    var errors = express_validator_1.validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    var extractedErrors = [];
    errors.array().map(function (err) {
        var _a;
        return extractedErrors.push((_a = {}, _a[err.param] = err.msg, _a));
    });
    console.log(extractedErrors);
    return res.status(422).json({
        type: 'error',
        name: 'Entities Error',
        errors: extractedErrors,
    });
};
exports.default = validateRule;
//# sourceMappingURL=index.js.map