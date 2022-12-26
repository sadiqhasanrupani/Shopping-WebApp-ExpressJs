"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Routers
const admin_1 = __importDefault(require("./routes/admin"));
const shop_1 = __importDefault(require("./routes/shop"));
const error_1 = require("./controller/error");
// Express App
const app = (0, express_1.default)();
const port = Number(process.env.PORT);
// configuaration of ejs and vies
app.set("view engine", "ejs");
app.set("views", "views");
// configuration of parser and static files
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join("public")));
// routers middleware
app.use("/admin", admin_1.default);
app.use(shop_1.default);
// 404 middleware
app.use(error_1.get404);
app.listen(port, () => {
    console.log(`[server]: Server is running on http://localhost:${port}.`);
});
