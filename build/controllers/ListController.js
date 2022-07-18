"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../config/app");
const Lists_1 = require("../models/Lists");
class ListControllers {
    constructor() {
    }
    async index(offset, limit, filters) {
        return (0, Lists_1.getLists)(offset || 0, limit || app_1.PAGINATION_LIMIT, filters);
    }
    async store(data) {
        return (0, Lists_1.addLists)(data);
    }
    async update() {
    }
    async delete() {
    }
}
exports.default = ListControllers;
//# sourceMappingURL=ListController.js.map