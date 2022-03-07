"use strict";

const ironMan = {
  regularName: 'Anthony Edward "Tony" Stark',
  abilities: [
    "genius-level intellect",
    "proficient scientist and engineer",
    "powered armor suit",
  ],
  marvelMovieAppearances: {
    ironMan: true,
    theHulk: true,
    ironManTwo: true,
    thor: false,
    captainAmerica: false,
    theAvengers: true,
    ironManThree: true,
    thorTwo: false,
    captainAmericaTwo: false,
    guardiansOfTheGalaxy: false,
    avengersTwo: true,
    antMan: false,
    captainAmericaThree: true,
    doctorStrange: false,
    guardiansOfTheGalaxyTwo: false,
    spiderManHomecoming: false,
    thorThree: false,
    blackPanther: false,
    avengersThree: true,
  },
  jarvisAreYouThere: () => {
    console.log("At your service, sir");
  },
};

console.log(ironMan.abilities[2]);
for (const ability of ironMan.abilities) console.log(ability);
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
ironMan.marvelMovieAppearances.spiderManHomecoming = true;
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
ironMan.jarvisAreYouThere();

const captainAmerica = {
  aliases: { superheroName: "Captain America" },
  abilities: ["Throw Shield", "Use Thor's Hammer", "Peak Human Strength"],
  sayPhrase: () => "I can do this all day.",
};
const createCaption = () => captainAmerica;
console.log(createCaption().aliases.superheroName);
console.log(createCaption().abilities[2]);
console.log(createCaption().sayPhrase());

const blackWidow = {
  aliases: {
    realName: "Natalia Alianovna Romanova",
    otherNotableAliases: ["Nat", "Natalie Rushman"],
  },
};

console.log(blackWidow.aliases.realName);
console.log(blackWidow.aliases.otherNotableAliases[1]);

const theAvengers = [
  { name: "Tony Stark", superheroName: "Iron Man" },
  { name: "Steve Rogers", superheroName: "Captain America" },
  { name: "Bruce Banner", superheroName: "The Hulk" },
  { name: "Thor" },
  { name: "Natasha Romanoff", superheroName: "Black Widow" },
  { name: "Clint Barton", superheroName: "Hawkeye" },
];

for (const avenger of theAvengers) console.log(avenger.name);

const mcuMovies = [
  ["ant-man", "ant-man and the wasp"],
  [
    "the avengers",
    "avengers: age of ultron",
    "avengers: infinity war",
    "avengers: end game",
  ],
  ["black panther"],
  [
    "captain america: the first avenger",
    "captain america: the winter soldier",
    "captain america: civil war",
  ],
  ["doctor strange"],
  ["guardians of the galaxy", "guardians of the galaxy vol.2"],
  ["the hulk"],
  ["iron man", "iron man 2", "iron man 3"],
  ["spiderman: homecoming"],
  ["thor", "thor: the dark world", "thor: ragnarok"],
];

for (const series of mcuMovies) for (const movie of series) console.log(movie);

//////////////////
//// Other Objects
//////////////////

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"],
  },
  mandolin: ["eastman", "weber", "collings"],
};

console.log(
  instruments.guitar.electric[1],
  instruments.guitar.acoustic[2],
  instruments.banjo[2],
  instruments.mandolin[1]
);

for (const eGuitar of instruments.guitar.electric) console.log(eGuitar);

instruments.vocals = ["HIRAIDAI", "Shimizu Shota", "Aimer", "YOASOBI", "Milet"];
for (const vocal of instruments.vocals) console.log(vocal);

const garmonbozia = {
  meltedFace: true,
  wobblyArms: true,
  mysteryMeats: [
    "Schlimmbinooks",
    "blangs",
    { place: "Akrotiri", treasures: ["Minoan temples", "volcanoes"] },
    {
      type: "Yuck-tops",
      deliverables: [
        "Nevermind",
        { zone: "safety-zone" },
        { zone: false, true: true },
        () => {
          return () => {
            return () => {
              return () => {
                return () => {
                  return {
                    website: "Gossipcop.com",
                    what: {
                      offering: "creamed corn",
                      location: "dark",
                    },
                  };
                };
              };
            };
          };
        },
      ],
    },
  ],
};

console.log(
  garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering
);

///////////////////////
/////// Wakanda
///////////////////////

const wakanda = {
  fiction: {
    firstAppear: { series: "Fantastic Four", episode: 52, year: 1966 },
    createdBy: ["Stan Lee", "Jack Kirby"],
    publisher: "Marvel Comics",
  },
  infomation: {
    people: { ruler: "Black Panther (T'Challa)", others: [] },
    ethnic: "Wakandan",
    race: "African",
    locations: [
      "Birnin Zana (Golden City)",
      "the Vibranium Mound",
      "Jabari village",
    ],
    population: 6000000,
    demonym: "Wakandan",
    government: "Constitutional monarchy",
    currency: "Wakandan Dollar",
    language: ["Wakandan", "Yoruba", "Hausa", "Xhosa", "English"],
    neighbors: {
      irl: {
        south: "Tanzania",
        southWest: "Uganda",
        west: "Republic of the Congo",
        northWest: "South Sudan",
        east: "Ethiopia",
        southeast: "Kenya",
      },
      mcu: ["Azania", "Canaan", "Narobia", "Mohannda"],
    },
  },
  wakandaForever: () => console.log("YIBAMBE!"),
};

console.log(wakanda);
wakanda.wakandaForever();

const [key, value] = Object.entries(wakanda);
console.log(key, value);
