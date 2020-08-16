const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var MONGODB_URI = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true, useFindAndModify: false });

mongoose.connect(MONGODB_URI);

app.use(require("./routes/api-routes.js"))
app.use(require("./routes/html-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});