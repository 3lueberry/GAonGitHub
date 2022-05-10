const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/pages", express.static(path.join(__dirname, "public", "src", "pages")));
// app.use("/imgs", express.static(path.join(__dirname, "public")));
// app.use("/vidoes", express.static(path.join(__dirname, "public")));
// app.use("/music", express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
