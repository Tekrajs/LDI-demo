"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (data) => {
    const config = {
        emailAddress: { required: true },
        firstName: { required: true },
        eventId: { required: true },
        eventTitle: { required: true },
        organiserTitle: { required: true },
        organiserId: { required: true }
    };
    return true;
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map