"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secretKey = process.env.SECRET_KEY;
var validateToken = function (req, res, next) {
    try {
        if (!req.headers['authorization']) {
            return res.status(401).json({ message: 'You are not Authorized' });
        }
        var authorization = req.headers['authorization'].split(' ');
        if (authorization[0] !== 'Bearer') {
            return res.status(401).json({ message: 'You are not Authorized' });
        }
        try {
            var jwtVerified = jsonwebtoken_1.default.verify(authorization[1], secretKey);
            if (jwtVerified) {
                next();
            }
        }
        catch (e) {
            return res.status(422).json({ message: 'Invalid Token' });
        }
    }
    catch (e) {
        next(e);
    }
};
exports.default = validateToken;
//# sourceMappingURL=validateToken.js.map