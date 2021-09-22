"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var create_anonymouse_user_1 = __importDefault(require("./createuser/create_anonymouse_user"));
var create_user_1 = __importDefault(require("./createuser/create_user"));
var router = express_1.default.Router();
router.use("/anonymous", create_anonymouse_user_1.default);
router.use("/user", create_user_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map