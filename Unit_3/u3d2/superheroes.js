const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/pages", express.static(path.join(__dirname, "public", "src", "pages")));

const superheroes = [
  { name: "Superman", powers: ["flight", "invulnerability", "x-ray vision"] },
  { name: "Wonder Woman", powers: ["superhuman strength", "telepathy", "accelerated healing"] },
  { name: "Black Panther", powers: ["agility", "magic resistance", "filthy rich"] },
];

const villians = [
  {
    name: "Lex Luthor",
    powers: ["super brain"],
  },
  {
    name: "Ares",
    powers: ["shape shifting", "teleporting"],
  },
  {
    name: "Killmonger",
    powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"],
  },
];

app.get("/superheroes", (req, res) => {
  res.json(superheroes);
});

app.get("/superheroes/:index", (req, res) => {
  const found = superheroes.some((hero, index) => index == req.params.index);

  if (found) {
    const hero = superheroes.find((hero, index) => index == req.params.index);
    const powers = hero.powers.map((pow) => `<li>${pow}</li>`);
    let reply = `<html><body style="text-align: center"><h1>${hero.name}</h1><ul style="list-style: none; padding: 0;">`;
    for (let pow of powers) reply += pow;
    reply += `</ul></body></html>`;
    res.send(reply);
  } else {
    res.status(400).json({ status: "error", message: `No hero with index ${req.params.index}` });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
