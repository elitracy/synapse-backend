"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
var users_1 = __importDefault(require("./api/users"));
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.use("/api/users", users_1["default"]);
app.get('/', function (_, res) {
    res.sendFile('index.html', { root: path_1["default"].join(__dirname, 'public') });
});
app.listen(port, function () {
    return console.log("\uD83E\uDDA7 Server ready at: http://localhost:".concat(port));
});
exports["default"] = app;
//# sourceMappingURL=index.js.map