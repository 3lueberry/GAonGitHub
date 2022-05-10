const express = require("express");
const path = require("path");

const app = express();

const flowers = [
  { id: 1, name: "rose", color: "red" },
  { id: 2, name: "lily", color: "white" },
  { id: 3, name: "orchid", color: "pink" },
];

app.get("/Scrappy", (req, res) => {
  res.send("Woof!");
});

app.get("/:name", (req, res) => {
  switch (req.params.name) {
    case "frasier":
      res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be'");
      break;
    case "niles":
      res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money");
      break;
    case "daphne":
      res.send("Well, have fun. I'm off to stick my head in the oven.");
      break;
    case "roz":
      res.send(
        "Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!"
      );
      break;
    case "martin":
      res.send(
        "You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged."
      );
      break;
    default:
      res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
