const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();
const listRoutes = require("./routes/list");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/list", listRoutes);

mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(
    app.listen(port, () => {
      console.log("Hello!");
    })
  )
  .catch((err) => {
    console.log(err);
  });
