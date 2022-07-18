"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(`/api`, routes_1.MainRouter);
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ erros: {
            message: err.message,
            error: err
        } });
});
exports.default = app;
//# sourceMappingURL=app.js.map