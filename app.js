// node core modules
const http = require("http");

// third party modules
const express = require("express");

// creating express app.
const app = express();

app.use((req, res, next) => {

  next();
}) 

app.use((req, res, next) => {
  res.send(`
  <body  style="font-family: Segoe UI;">
    <h1 align="center">Hii from Express.js file.</h1>
  </body>
  </html>
  `);

  next(); // to get the permission to continue the next middleware function.
});

// importing app to the createServer argument
const server = http.createServer(app);

server.listen(8000);
