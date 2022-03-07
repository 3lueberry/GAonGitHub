"use strict";

console.log("Welcome to WestWorld!");

const host = {
  name: "Edith",
  occupation: "secretary",
  saySpecs() {
    console.log(this);
    console.log(
      `My name is ${this.name}. My occupation is ${this.occupation}.`
    );
  },
  saySpecs2: () => {
    console.log(this);
    console.log(
      `My name is ${this.name}. My occupation is ${this.occupation}.`
    );
  },
};

host.saySpecs();
host.saySpecs2();

class BasicHost {
  constructor(name = "anonymous", occupation = "westworlder") {
    (this.name = name), (this.occupation = occupation);
    this.empathy = Math.floor(Math.random() * 20) + 1;
    this.loyalty = Math.floor(Math.random() * 20) + 1;
    this.aggression = Math.floor(Math.random() * 20) + 1;
    this.curiosity = Math.floor(Math.random() * 20) + 1;
    this.bulkApperception = Math.floor(Math.random() * 20) + 1;
  }

  saySpecs() {
    console.log(
      `My name is ${this.name}. My occupation is ${this.occupation}.`
    );
  }
}

const host1 = new BasicHost();
console.log(host1);
host1.saySpecs();

const names = [
  "Laila",
  "Jack",
  "Harley",
  "Hertha",
  "Darren",
  "Jolene",
  "Loura",
  "Lona",
  "Davida",
  "Reena",
  "Leland",
  "Ta",
  "Jen",
  "Linn",
  "Roslyn",
  "Margorie",
  "Rafaela",
  "Romona",
  "Shanel",
  "Stan",
];

const occupations = [
  "Clerical assistant",
  "Leaflet distributor",
  "Landowner",
  "Special constable",
  "Anaesthetist",
  "Park-keeper",
  "Butler",
  "Choreographer",
  "Blacksmith",
  "Chef",
  "Legal secretary",
  "Song writer",
  "Librarian",
  "Landscape gardener",
];

const hostArr = [];
for (let i = 0; i < 100; i++)
  hostArr.push(
    new BasicHost(
      names[Math.floor(Math.random() * names.length)],
      occupations[Math.floor(Math.random() * occupations.length)]
    )
  );

console.log(hostArr);
hostArr[55].saySpecs();
