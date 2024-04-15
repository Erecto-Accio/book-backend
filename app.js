const express = require("express");
const app = express();
const adventure = require("./api/routes/adventure");

const morgan = require("morgan");

// middleware
app.use(morgan("dev"));

app.use("/adventure", adventure);
app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});
module.exports = app;
