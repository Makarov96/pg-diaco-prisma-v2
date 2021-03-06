"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./core/utils/config");
var http = __importStar(require("http"));
var routes_1 = require("./routes/routes");
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
var server = http.createServer(app);
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((0, morgan_1.default)("prod"));
app.set("ipaddr", "127.0.0.1");
app.set("port", config_1.PORT || 3000);
server.listen(config_1.PORT || 3000, function () { console.log('server is running on port http://localhost:' + ("" + (config_1.PORT || 3000))); });
//# sourceMappingURL=server.js.map