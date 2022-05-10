const express = require("express");
const path = require("path");
const Flowers = require("./models/Flowers");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/flowers", (req, res) => {
  res.json(Flowers);
});

app.post("/api/flowers", (req, res) => {
  req.body.id = Math.random();
  Flowers.push(req.body);
  res.json(Flowers);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
