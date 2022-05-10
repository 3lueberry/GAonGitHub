const app = require("./src/expressLoader");
const path = require("path");
const hbs = require("./src/hbsLoader");
const connectDB = require("./db/db")();
const Flowers = require("./models/Flowers");

// connectDB();

app.get("/api/flowers", async (req, res) => {
  console.log("GET");
  try {
    const allFlowers = await Flowers.find().sort({ id: -1 });
    res.json(allFlowers);
  } catch (err) {
    console.error(err.message);
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
