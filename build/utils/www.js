"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var http_1 = __importDefault(require("http"));
var db_1 = __importDefault(require("./db"));
var index_1 = __importDefault(require("../index"));
var port = process.env.PORT || 8000;
index_1.default.set('port', port);
var server = http_1.default.createServer(index_1.default);
db_1.default().then(function () {
    server.listen(port, function () {
        console.log("The server is running at http://localhost:" + port);
    });
}).catch(function (error) {
    console.log('Error Failed');
});
//# sourceMappingURL=www.js.map