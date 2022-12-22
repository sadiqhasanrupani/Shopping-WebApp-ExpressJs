const express = require("express");
const bodyParser = require("body-parser");

// path handler inbuild module
const path = require("path");

// routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//utils
const rootDir = require("./utils/path");

// express app
const app = express();
const port = 8080;

// controllers
const { get404 } = require("./controller/error");

// configuration for the template engine
app.set("view engine", "ejs"); // configuration for ejs TEMPLATE ENGINE
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// 404 middleware
app.use(get404);

app.listen(port, () =>
  console.log(`The express app is running on http://localhost:${port}/`)
);
