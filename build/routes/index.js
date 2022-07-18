"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const index_1 = require("./startlist/index");
const router = (0, express_1.Router)();
router.use('/startlist', index_1.startList);
router.use('/', async (req, res) => {
    res.end("Lets Do It Demo");
});
exports.MainRouter = router;
//# sourceMappingURL=index.js.map