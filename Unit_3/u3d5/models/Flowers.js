const mongoose = require("mongoose");

const FlowerSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    colour: { type: String, required: true },
  },
  { collection: "flowers" }
);
const Flowers = mongoose.model("Flowers", FlowerSchema);
module.exports = Flowers;
