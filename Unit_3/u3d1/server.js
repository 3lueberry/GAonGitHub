const express = require("express");
const path = require("path");

const app = express();

const flowers = [
  { id: 1, name: "rose", color: "red" },
  { id: 2, name: "lily", color: "white" },
  { id: 3, name: "orchid", color: "pink" },
];

app.get("/", (req, res) => {
  //   res.send("hello");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/flowers", (req, res) => {
  res.json({ one: req.query.one, two: req.query.two });
});

// app.get("/api/flowers", (req, res) => {
//   res.json(flowers);
// });

app.get("/api/flowers/:id", (req, res) => {
  //   res.json(flowers.filter((flower) => flower.id == req.params.id));
  console.log(req);
  const found = flowers.some((flower) => {
    flower.id == req.params.id;
  });

  if (found) {
    res.json(flowers.filter((flower) => flower.id == req.params.id));
  } else {
    res.status(400).json({ status: "error", message: `No folwer with id ${req.params.id}` });
  }
});

// app.listen(5001);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
