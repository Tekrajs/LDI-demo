"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("./utilities/logger"));
async function init() {
    const options = {
        hostname: 'ldt-tech-test.herokuapp.com',
        port: 443,
        path: '/api/startlistentries',
        method: 'GET'
    };
    return new Promise((resolve, reject) => {
        let data = '';
        const req = https_1.default.request(options, res => {
            res.on('data', d => {
                data += d;
            });
            res.on('end', () => {
                fs_1.default.writeFileSync('./src/startlistentries.json', data, 'utf8');
                resolve(true);
            });
        });
        req.on('error', error => {
            reject(error);
        });
        req.end();
    });
}
init().then(() => {
}).catch(e => logger_1.default.error(e));
//# sourceMappingURL=sync.js.map