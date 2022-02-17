"use strict";

const milkWay = {
  type: "barred spiral",
  age: "13,600,000,000",
  containsEarth: false,
};

console.log(milkWay.containsEarth);
milkWay.containsEarth = true;
console.log(milkWay.containsEarth);
milkWay.numbersOfStars = "100-400 billion";

console.log(milkWay);

const solarSystem = [
  { name: "Mercury", ringSystem: false, moons: [] },
  { name: "Venus", ringSystem: false, moons: [] },
  { name: "Earth", ringSystem: false, moons: ["The Moon"] },
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
  {
    name: "Jupiter",
    ringSystem: true,
    moons: ["Europa", "Ganymede", "Io", "Callisto"],
  },
  {
    name: "Saturn",
    ringSystem: true,
    moons: ["Titan", "Enceladus", "Rhea", "Mimas"],
  },
  {
    name: "Uranus",
    ringSystem: true,
    moons: ["Miranda", "Titania", "Ariel", "Umbriel"],
  },
  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] },
];

const searchMe = (str) => {
  return solarSystem.findIndex((planet) => planet.name === str);
};

const searchRing = () => {
  return solarSystem.findIndex((planet) => planet.ringSystem);
};

console.log(solarSystem[searchMe("Mercury")].ringSystem);
console.log(solarSystem[searchMe("Saturn")].ringSystem);
console.log(solarSystem[searchMe("Jupiter")].moons);
console.log(solarSystem[searchMe("Neptune")].moons[1]);

solarSystem[searchMe("Venus")].moons.push("Endor");
console.log(solarSystem[searchMe("Venus")].moons);

const newPlanet = {};
newPlanet.name = "Pluto";
newPlanet.ringSystem = false;
newPlanet.moons = ["Charon"];
console.log(newPlanet);
solarSystem.push(newPlanet);
console.log(solarSystem[searchMe("Pluto")]);

solarSystem[searchMe("Earth")].diameter = "7,917.5 mi";
console.log(solarSystem[searchMe("Earth")]);
solarSystem[searchMe("Mercury")].ringSystem = true;
console.log(solarSystem[searchMe("Mercury")]);

solarSystem[searchMe("Uranus")].moons.splice(
  solarSystem[searchMe("Uranus")].moons.indexOf("Umbriel"),
  1,
  "Oberon"
);
console.log(solarSystem[searchMe("Uranus")].moons);

for (const planet of solarSystem.filter((planet) => planet.ringSystem))
  console.log(planet);

////////////////////
///// Solar Part 2
////////////////////

const system = {
  Mercury: {
    radiusp: "same ",
    name: "Mercury",
    density: 5.43,
    tilt: 2,
    image: "textures/mercury.gif",
    rotationperiod: 1408,
    period: 0.24,
    radiuse: 2439,
    satellites: 0,
    au: 0.3871,
    eccentricity: 0.206,
    velocity: 47.89,
    mass: 0.06,
    inclination: 7,
  },
  Venus: {
    radiusp: "same ",
    name: "Venus",
    density: 5.25,
    tilt: 177.3,
    image: "textures/venus.gif",
    rotationperiod: 5832,
    period: 0.62,
    radiuse: 6052,
    satellites: 0,
    au: 0.7233,
    eccentricity: 0.007,
    velocity: 35.04,
    mass: 0.82,
    inclination: 3.4,
  },
  Earth: {
    radiusp: 6357,
    name: "Earth",
    density: 5.52,
    tilt: 23.45,
    image: "textures/earth.gif",
    rotationperiod: 23.93,
    period: 1,
    radiuse: 6378,
    satellites: 1,
    au: 1,
    eccentricity: 0.017,
    velocity: 29.79,
    mass: 1,
    inclination: 0,
  },
  Mars: {
    radiusp: 3380,
    name: "Mars",
    density: 3.95,
    tilt: 25.19,
    image: "textures/mars.gif",
    rotationperiod: 24.62,
    period: 1.88,
    radiuse: 3397,
    satellites: 2,
    au: 1.524,
    eccentricity: 0.093,
    velocity: 24.14,
    mass: 0.11,
    inclination: 1.85,
  },
  Jupiter: {
    radiusp: 66854,
    name: "Jupiter",
    density: 1.33,
    tilt: 3.12,
    image: "textures/jupiter.gif",
    rotationperiod: 9.92,
    period: 11.86,
    radiuse: 71490,
    satellites: 69,
    au: 5.203,
    eccentricity: 0.048,
    velocity: 13.06,
    mass: 317.89,
    inclination: 1.3,
  },
  Saturn: {
    radiusp: 54360,
    name: "Saturn",
    density: 0.69,
    tilt: 26.73,
    image: "textures/saturn.gif",
    rotationperiod: 10.66,
    period: 29.46,
    radiuse: 60268,
    satellites: 30,
    au: 9.539,
    eccentricity: 0.056,
    velocity: 9.64,
    mass: 95.18,
    inclination: 2.49,
  },
  Uranus: {
    radiusp: 24973,
    name: "Uranus",
    density: 1.29,
    tilt: 97.86,
    image: "textures/uranus.gif",
    rotationperiod: 17.24,
    period: 84.01,
    radiuse: 25559,
    satellites: 24,
    au: 19.19,
    eccentricity: 0.046,
    velocity: 6.81,
    mass: 14.53,
    inclination: 0.77,
  },
  Neptune: {
    radiusp: 24340,
    name: "Neptune",
    density: 1.64,
    tilt: 29.6,
    image: "textures/neptune.gif",
    rotationperiod: 16.11,
    period: 164.79,
    radiuse: 25269,
    satellites: 8,
    au: 30.06,
    eccentricity: 0.01,
    velocity: 5.43,
    mass: 17.14,
    inclination: 1.77,
  },
  Pluto: {
    radiusp: "same",
    name: "Pluto",
    density: 2.03,
    tilt: 122.46,
    image: "textures/pluto.gif",
    rotationperiod: 153.3,
    period: 248.54,
    radiuse: 1160,
    satellites: 1,
    au: 39.48,
    eccentricity: 0.248,
    velocity: 4.74,
    mass: 0.002,
    inclination: 17.15,
  },
};

console.log(system.Mercury.mass);
console.log(system.Venus.eccentricity);

console.log(
  system.Jupiter.satellites +
    system.Saturn.satellites +
    system.Uranus.satellites +
    system.Neptune.satellites
);

if (typeof system.Mercury.radiusp === "string")
  system.Mercury.radiusp = system.Mercury.radiuse;
console.log(system.Mercury.radiusp);

console.log(
  system.Jupiter.mass * system.Jupiter.velocity -
    system.Pluto.mass * system.Pluto.velocity
);

const PlanetX = {
  radiusp: "same",
  name: "PlanetX",
  density: 2.03,
  tilt: 122.46,
  image: "textures/planetx.gif",
  rotationperiod: 153.3,
  period: 248.54,
  radiuse: 1160,
  satellites: 1,
  au: 39.48,
  eccentricity: 0.248,
  velocity: 4.74,
  mass: 0.002,
  inclination: 17.15,
};

system.PlanetX = PlanetX;
console.log(system);

//////////////////////
////// Object Sort
//////////////////////

const movies = [
  { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
  { title: "Eraserhead", director: "David Lynch", year: 1978 },
  { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
];

const sortArrayOfObjects = (arr, key) => {
  arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  return arr;
};

/*
movies.sort((mov1, mov2) =>
  mov1.title.toLocaleLowerCase() < mov2.title.toLocaleLowerCase() ? -1 : 1
);*/

console.log(sortArrayOfObjects(movies, "title"));
console.log(sortArrayOfObjects(movies, "year"));
console.log(sortArrayOfObjects(movies, "director"));

/*
solarSystem.sort((p1, p2) =>
  p1.name.toLocaleLowerCase() < p2.name.toLocaleLowerCase() ? -1 : 1
);*/

console.log(sortArrayOfObjects(solarSystem, "name"));

console.log(solarSystem[searchMe("me")]);
