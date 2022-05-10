const app = require("./src/expressLoader");
const path = require("path");
const hbs = require("./src/hbsLoader");
const connectDB = require("./db/db");
const Flowers = require("./models/Flowers");

connectDB();

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const genRandomString = (len) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.get("/api/seed", async (req, res) => {
  await Flowers.deleteMany({});
  await Flowers.create(
    [
      { name: "Rose", colour: "red" },
      { name: "Lily", colour: "white" },
      { name: "Orchid", colour: "pink" },
      { name: genRandomString(20), colour: genRandomString(30) },
    ],
    (err, data) => {
      console.log(err, data);
      if (err) res.status(400).json({ status: "error", message: "seeding error" });
      else res.json(data);
    }
  );
});

app.get("/api/flowers", async (req, res) => {
  console.log("GET");
  try {
    const allFlowers = await Flowers.find().sort({ _id: -1 });
    res.json(allFlowers);
  } catch (err) {
    console.error(err.message);
  }
});

// app.post("/api/flowers", async (req, res) => {
//   await Flowers.create(req.body);
//   res.json({ status: "OK", message: "Saved" });
// });

app.post("/api/flowers", async (req, res) => {
  const createdFlower = new Flowers({
    name: req.body.name,
    colour: req.body.colour,
  });

  await createdFlower.save();
  res.json({ status: "OK", message: "Saved" });
});

app.delete("/api/flowers/:id", async (req, res) => {
  await Flowers.findByIdAndDelete(req.params.id);
  res.json({ status: "ok", message: "deleted" });
});

app.delete("/api/flowers", async (req, res) => {
  const { name } = req.body;
  await Flowers.deleteOne({ name });
  res.json({ status: "ok", message: "deleted" });
});

app.put("/api/flowers", async (req, res) => {
  const response = await Flowers.updateOne({ name: req.body.name }, { color: req.body.newColour });
  console.log(response);
  res.json({ status: "ok", message: "updated" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
