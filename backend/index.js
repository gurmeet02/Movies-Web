const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const listRoutes = require("./routes/list");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
