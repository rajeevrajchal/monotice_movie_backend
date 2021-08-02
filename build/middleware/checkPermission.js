"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secretKey = process.env.SECRET_KEY;
var checkPermission = function (roles) {
    return function (req, res, next) {
        try {
            var authorization = req.headers['authorization'] && req.headers['authorization'].split(' ');
            var jwtVerified = jsonwebtoken_1.default.verify(authorization[1], secretKey);
            if (!jwtVerified) {
                res.status(401).json({
                    success: 'false',
                    message: 'You are not authorized.',
                });
            }
            var token = jsonwebtoken_1.default.decode(authorization[1], secretKey);
            if (token) {
                if (roles.length === 0) {
                    // user's role is not authorized
                    return res.status(401).json({ message: 'You have no permission' });
                }
                if (roles.length && !roles.includes(parseInt(token.user.role))) {
                    // user's role is not authorized
                    return res.status(401).json({ message: 'You have no permission' });
                }
                next();
            }
            else {
                return res.status(401).json({ message: 'You have no permission' });
            }
        }
        catch (e) {
            next(e);
        }
    };
};
exports.default = checkPermission;
//# sourceMappingURL=checkPermission.js.map