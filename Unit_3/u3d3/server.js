const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const hbs = require("hbs");
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(cors());
app.use(logger);

app.get("/", (req, res, next) => {
  console.log("root");
  res.send("Home Page");
  next();
});

app.use(logger2);

app.get("/pages", (req, res, next) => {
  console.log("pages");
  res.send("Pages Page");
  next();
});

function logger(req, res, next) {
  console.log("LOG");
  next();
}

function logger2(req, res, next) {
  console.log("before 2");
  next();
  console.log("after 2");
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
