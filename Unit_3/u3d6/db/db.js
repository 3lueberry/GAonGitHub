const mongoose = require("mongoose");

// const db = "mongodb://localhost:27017/acme";
const db = "mongodb://127.0.0.1:27017/acme";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("DB Connected!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
