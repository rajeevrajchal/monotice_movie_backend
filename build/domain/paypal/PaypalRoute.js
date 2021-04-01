"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PayPalController_1 = require("./PayPalController");
var paypalRoute = express_1.default.Router();
paypalRoute.post('', PayPalController_1.paymentProcess);
paypalRoute.get('/success', PayPalController_1.successPaypal);
exports.default = paypalRoute;
//# sourceMappingURL=PaypalRoute.js.map