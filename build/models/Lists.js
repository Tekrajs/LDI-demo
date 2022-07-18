"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLists = exports.getLists = void 0;
const startlistentries_json_1 = __importDefault(require("../startlistentries.json"));
const fs_1 = __importDefault(require("fs"));
const getLists = (offset, limit, filters) => {
    let _listData = Object.assign([], startlistentries_json_1.default);
    let _currentData = [];
    if (Object.keys(filters).length) {
        console.log("inside filter");
        _listData = _listData.filter((d) => {
            var _a;
            for (const [key, value] of Object.entries(filters)) {
                if (value && !((_a = d[key]) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(value.toLowerCase()))) {
                    return false;
                }
                return true;
            }
        });
    }
    if (offset && limit) {
        console.log(_listData.slice(Number(offset), Number(limit)));
        if (_listData.length > Number(offset)) {
            _currentData = _listData.slice(Number(offset), Number(offset) + Number(limit));
        }
        else {
            _currentData = _listData.slice(0, Number(limit));
        }
    }
    console.log(_currentData.length);
    return _currentData;
};
exports.getLists = getLists;
const addLists = (newData) => {
    let data = Object.assign([], startlistentries_json_1.default);
    data.push(newData);
    fs_1.default.writeFileSync('./src/startlistentries.json', JSON.stringify(data), 'utf8');
    return newData;
};
exports.addLists = addLists;
//# sourceMappingURL=Lists.js.map