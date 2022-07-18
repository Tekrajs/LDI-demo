"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startList = void 0;
const express_1 = require("express");
const validate_1 = require("../../helpers/validate");
const ListController_1 = __importDefault(require("../../controllers/ListController"));
const router = (0, express_1.Router)();
router.get('/', async (req, res, next) => {
    let { limit, offset } = req.query;
    let { filters } = req.body;
    const lists = new ListController_1.default();
    return res.status(200).json({
        success: true,
        data: await lists.index(offset, limit, filters)
    });
});
router.post('/', async (req, res, next) => {
    if ((0, validate_1.validate)(req.body)) {
        const lists = new ListController_1.default();
        return res.status(200).json({
            success: true,
            data: await lists.store(req.body)
        });
    }
});
exports.startList = router;
//# sourceMappingURL=index.js.map