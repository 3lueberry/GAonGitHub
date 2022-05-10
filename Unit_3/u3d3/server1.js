const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const hbs = require("hbs");
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(cors());

app.get("/", (req, res, next) => {
  console.log("root");
  res.send("Home Page");
});

app.get("/pages", auth, log, (req, res, next) => {
  console.log("pages");
  console.log(`Admin? ${req.admin}`);
  res.send("Pages Page");
});

function auth(req, res, next) {
  console.log("auth");
  if (req.query.superadmin === "true") {
    req.admin = true;
    next();
    return;
  }
  res.send("Not authorised");
}

function log(req, res, next) {
  console.log("log");
  next();
}

console.log(process.env.PORT);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
