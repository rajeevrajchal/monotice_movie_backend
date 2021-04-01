"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.successPaypal = exports.paymentProcess = void 0;
var paypal_rest_sdk_1 = __importDefault(require("paypal-rest-sdk"));
paypal_rest_sdk_1.default.configure({
    mode: 'sandbox',
    client_id: 'AVpNVy7Zkg_lCe33sRI3JLF7xm8pBE5q-IN6DY-Rzf0oTIeUhNRaeP-tsthM6bFhGWAcQbc4SbjyMrqz',
    client_secret: 'ECMBPLqayrlSoME75EbqelYu5Ym-6iNkFcJ8Ch472SId2Zm2OUF9IcMOXWIoWFzASNbG434ZcWSjU1qE',
});
var paymentProcess = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var create_payment_json;
    return __generator(this, function (_a) {
        try {
            console.log('payment request');
            create_payment_json = {
                intent: 'sale',
                payer: {
                    payment_method: 'paypal',
                },
                redirect_urls: {
                    return_url: 'http://localhost:3000/success',
                    cancel_url: 'http://localhost:8000/api/paypal/cancel',
                },
                transactions: [
                    {
                        item_list: {
                            items: [
                                {
                                    name: 'Donation',
                                    sku: 'donate',
                                    price: '1.00',
                                    currency: 'USD',
                                    quantity: 1,
                                },
                            ],
                        },
                        amount: {
                            currency: 'USD',
                            total: '1.00',
                        },
                        description: 'This is the test payment description.',
                    },
                ],
            };
            paypal_rest_sdk_1.default.payment.create(create_payment_json, function (error, payment) {
                if (error) {
                    console.log(error);
                    throw error;
                }
                else {
                    // @ts-ignore
                    for (var i = 0; i < payment.links.length; i++) {
                        // @ts-ignore
                        if (payment.links[i].rel === 'approval_url') {
                            // @ts-ignore
                            console.log(payment.links[i].href);
                            // @ts-ignore
                            res.redirect(payment.links[i].href);
                        }
                    }
                }
            });
        }
        catch (e) {
            console.log(e);
            // res.status(400).json({
            //   success: 'false',
            //   message: e.message,
            //   code: e.code,
            // });
        }
        return [2 /*return*/];
    });
}); };
exports.paymentProcess = paymentProcess;
var successPaypal = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('the success');
        console.log(req);
        return [2 /*return*/];
    });
}); };
exports.successPaypal = successPaypal;
//# sourceMappingURL=PayPalController.js.map