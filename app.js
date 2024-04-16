// Dependencies
const express = require("express");
const app = express();
const adventure = require("./api/routes/adventure");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// DATABASE
const uri = `mongodb+srv://toisiftasrik:${process.env.MONGO_PASS}@cluster1.bxa8ai0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
mongoose.connect(uri);

// middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Defining the routes
app.use("/adventure", adventure);

// Not Found Route
app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});

// Exporting
module.exports = app;
