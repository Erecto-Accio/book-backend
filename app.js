const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Test worked",
  });
});

module.exports = app;
