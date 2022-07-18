"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app_2 = require("./config/app");
const logger_1 = __importDefault(require("./utilities/logger"));
app_1.default.listen(app_2.APP_PORT, () => {
    logger_1.default.info(`server running on port: ${app_2.APP_PORT}`);
    console.log(`server is running on port : ${app_2.APP_PORT}`);
}).on('error', (e) => logger_1.default.error(e));
//# sourceMappingURL=server.js.map