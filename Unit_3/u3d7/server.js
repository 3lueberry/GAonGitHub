const app = require("./src/expressLoader");
const hbs = require("./src/hbsLoader");
const path = require("path");
const bcrypt = require("bcrypt");
const connectDB = require("./db/db");
const users = require("./router/users");

const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/memebership";
connectDB(dbURI);

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const genRandomString = (len) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.use("/users", users);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
