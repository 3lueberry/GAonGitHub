"use strict";

const crayonBox = { name: ["Red", "Green", "Blue"] };
console.log(crayonBox.name[1]);

const bottle = {
  cap: { material: ["metal", "plastic"], color: ["blue", "white"] },
};
console.log(bottle.cap.color[1]);

const receipt = [
  { name: "A", price: 20 },
  { name: "B", price: 42 },
  { name: "C", price: 35 },
];

console.log(receipt[2].price);

const apartmentBuilding = [["Tenant A", "Tenant B", "Tenant C"]];
console.log(apartmentBuilding[0][0]);

///////////////////////////////
/////// Combine Objects, arrays and functions more than one level deep
///////////////////////////////

const myScarf = {
  item: "scarf",
  size: "6ft",
  color: "blue/white",
  price: "$35",
  knit: function (str) {
    return this[str];
  },
  // knit: (str) => this[str]; <--- `this` not working inside arrow function
};

console.log(`item: ${myScarf.knit("item")}`);
console.log(`size: ${myScarf.knit("size")}`);

const crayonSelector = () => crayonBox;
console.log(crayonSelector().name[2]);

// declare const option, then return option;
const powerButton = () => {
  const option = () => {
    console.log("Pls select a song");
  };
  return option;
};

// powerButton() call powerButton and get function option from return; powerButton() = option
// [powerButton()]() = option();
powerButton()();

// return anon function at return
const powerButton2 = () => {
  return () => {
    console.log("Pls select a song2");
  };
};

powerButton2()();

// assign function to option right before return; option need to be define with let instead of const
const powerButton3 = () => {
  let option;
  return (option = () => console.log("Pls select a song3"));
};

powerButton3()();

//////////////////////////////
///// Model a Vending Machine
//////////////////////////////

const vendingMachine = {
  snacks: [
    { item: "Energy Bar", price: 10 },
    { item: "Cup Ramen", price: 5 },
    { item: "Recovery Potion", price: 2 },
  ],
  vend: function (pos, cash = 0) {
    if (!cash) return "Pls pay up!";
    else if (cash < this.snacks[pos].price) return "Cheapo!";
    else
      return `${this.snacks[pos].item} is dispensed. And here is your $${
        cash - this.snacks[pos].price
      } change. Arigatou Gozaimasu!`;
  },
};

console.log(vendingMachine.vend(1));
console.log(vendingMachine.vend(0, 5));
console.log(vendingMachine.vend(2, 5));

///////////////////
///// Callbacks
///////////////////

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const calculate = (num1, num2, operate) => operate(num1, num2);

console.log(calculate(3, 4, add));
console.log(calculate(3, 4, subtract));
console.log(calculate(3, 4, multiply));
console.log(calculate(3, 4, divide));

/////////////////////
/// Function Definition Placement
/////////////////////

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

// ReferenceError: Cannot access 'foo' before initialization
/*
foo();

const foo ()=>{
    console.log('hi');
}
*/
// funtion foo() has not been prepared in run-time memory when it's invoked.

////////////////////////////////
///// Section 3 Array Methods with Callbacks
////////////////////////////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

const newNums = [];
const newPanagram = [];

console.log(nums.every((num) => num >= 0));
console.log(panagram.every((str) => str.length < 8));

console.log(nums.filter((num) => num < 4));
console.log(panagram.filter((str) => !(str.length % 2)));

console.log(nums.find((num) => num % 5 === 0));
console.log(panagram.find((str) => str.length >= 5));

console.log(nums.findIndex((num) => num % 3 === 0));
console.log(panagram.findIndex((str) => str.length <= 2));

nums.forEach((num) => {
  newNums.push(num * 3);
  console.log(newNums[newNums.length - 1]);
});
panagram.forEach((str) => {
  newPanagram.push(str + "!");
  console.log(newPanagram[newPanagram.length - 1]);
});
console.log(nums);
console.log(newNums);
console.log(panagram);
console.log(newPanagram);
// variable passed to callback fn are value only copies of array.
// .forEach do not return anything so new values need to be push() inside callback fn.

const newNums2 = nums.map((num) => num * 100);
const newPanagram2 = panagram.map((str) => str.toUpperCase());
console.log(nums);
console.log(newNums2);
console.log(panagram);
console.log(newPanagram2);
// variable passed to callback fn are value only copies of array.
// .map return an array and can be assigned to new variable.

console.log(nums.some((num) => num % 7 === 0));
console.log(panagram.some((str) => str.split("").indexOf("a") >= 0));

console.log(nums.reduce((num1, num2) => num1 + num2));
console.log(panagram.reduce((str1, str2) => str1 + " " + str2));

console.log(nums.sort());
console.log(panagram.sort());

console.log(nums.sort((num1, num2) => num1 - num2));
console.log(nums.sort((num1, num2) => num2 - num1));
console.log(
  panagram.sort((str1, str2) =>
    str1.toLowerCase().localeCompare(str2.toLocaleLowerCase())
  )
);
console.log(
  panagram.sort((str1, str2) =>
    str2.toLowerCase().localeCompare(str1.toLocaleLowerCase())
  )
);

console.log(nums);
console.log(panagram);
// .sort() is an in-place array operation

////////////////////////////
//// Array Methods Challenge
////////////////////////////

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(
  alphabet.every((letter) => panagram.some((word) => word.indexOf(letter) >= 0))
);

/////////////////////////////
//// Workng with Data
/////////////////////////////

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

console.log(products.filter((prod) => prod.price < 10));

console.log(
  products.sort((prod1, prod2) =>
    prod1["name"].toLowerCase().localeCompare(prod2["name"].toLocaleLowerCase())
  )
);
