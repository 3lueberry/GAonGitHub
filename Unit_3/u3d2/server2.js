const express = require("express");
const path = require("path");
const Flowers = require("./models/Flowers");
const app = express();

app.get("/", (req, res) => {
  //   res.send("hello");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.get("/api/flowers", (req, res) => {
//   res.json({ one: req.query.one, two: req.query.two });
// });

app.get("/api/flowers", (req, res) => {
  res.json(Flowers);
});

app.get("/api/flowers/:id", (req, res) => {
  console.log({ flower: Flowers[req.params.id] });
  res.render("show.ejs", { flower: Flowers[req.params.id] });
});

// app.listen(5001);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
