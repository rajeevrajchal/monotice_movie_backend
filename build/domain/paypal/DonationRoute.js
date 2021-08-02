"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var DonationController_1 = require("./DonationController");
var donationRoute = express_1.default.Router();
donationRoute.post('', DonationController_1.donationComplete);
donationRoute.get('', DonationController_1.fetchAllDonation);
exports.default = donationRoute;
//# sourceMappingURL=DonationRoute.js.map