import express from "express";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import rootDir from "./utils/path";

// Routers
import adminRouters from "./routes/admin";
import shopRouter from "./routes/shop";
import { get404 } from "./controller/error";

// Express App
const app = express();
const port: number = Number(process.env.PORT);

// configuaration of ejs and vies
app.set("view engine", "ejs");
app.set("views", "views");

// configuration of parser and static files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../", "../", "public")))

// routers middleware
app.use("/admin", adminRouters);
app.use(shopRouter);

// 404 middleware
app.use(get404);

app.listen(port, () => {
  console.log(`[server]: Server is running on http://localhost:${port}.`);
});
