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

// app.delete("/api/flowers/:index", (req, res) => {
//   Flowers.splice(req.params.index, 1);
//   res.json(Flowers);
// });

// app.delete("/api/flowers/:id", (req, res) => {
//   Flowers.splice(0, Flowers.length, ...Flowers.filter((f, i) => f.id != req.params.id));
//   res.json(Flowers);
// });

app.delete("/api/flowers", (req, res) => {
  Flowers.splice(0, Flowers.length, ...Flowers.filter((f, i) => f.id != req.body.id));
  res.json(Flowers);
});

app.put("/api/flowers/:id", (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let color = req.body.color;

  Flowers.map((f, i) => {
    console.log(f.id, id);
    if (f.id == id) {
      name = name ? name : f.name;
      color = color ? color : f.color;
      console.log({ id, name, color });
      return { id, name, color };
    }
  });

  res.json(Flowers);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
