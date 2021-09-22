"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_handling_controller_1 = __importDefault(require("../../adapter/controller/user_handling_controller"));
var router = express_1.default.Router();
router.post("/createanonymoususer", user_handling_controller_1.default.indexCreateAnonymousUser);
exports.default = router;
//# sourceMappingURL=create_anonymouse_user.js.map