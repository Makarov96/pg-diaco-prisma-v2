"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("../feature/complaints/routes/index"));
var index_2 = __importDefault(require("../feature/user/routes/index"));
var cors_1 = __importDefault(require("cors"));
var router = express_1.default.Router();
exports.router = router;
var options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: "*",
    preflightContinue: false,
};
router.use((0, cors_1.default)(options));
router.use(index_1.default);
router.use(index_2.default);
//# sourceMappingURL=routes.js.map