"use strict";

let a = 42.78;
let b = 1.1;
let c = -2;
let d = 0.5;
let e = 16;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.abs(b - a));
console.log(Math.max(a, b, c, d, e));
console.log(Math.min(a, b, c, d, e));
console.log(Math.sqrt(e));
console.log(Math.pow(e, d));

let die = Math.floor(Math.random() * 6) + 1;
console.log(die);

let firstVariable = `"Hello World"`;
firstVariable = 1987;
let secondVariable = firstVariable;
secondVariable = "The Joker And The Queen.";

console.log(firstVariable);

const yourName = "Blueberry";
console.log(`Hello, my name is ${yourName}.`);

a = 6;
b = 100;
c = -5;
d = 3000;
e = "Jelly Bean";

console.log(a < b);
console.log(c < d);
console.log("Peanut" === "peanut");
console.log(a < b > c);
console.log(a ** a < d);
console.log(e === "Jelly Bean");
console.log(48 == "48");
console.log(e != "Eh");

let animal = "cow";
console.log(animal === "cow" ? "mooooo" : "What's up?");
animal = "iAmNotAnimal";
console.log(animal === "cow" ? "mooooo" : "What's up?");

let age = 20;
console.log(age >= 16 ? "Here are the keys" : "Sorry, you're too young.");
age = 14;
console.log(age >= 16 ? "Here are the keys" : "Sorry, you're too young.");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const arr = [];
for (let i = 500; i >= 50; i--) {
  arr.push(i);
  if (i == 450) break;
}
console.log(arr);

for (let i = 1; i <= 100; i++) {
  console.log(i % 2 == 0 ? i : `${i} is an odd number`);
}

for (let i = 1; i <= 100; i++) {
  console.log(
    i % 3 == 0
      ? `I found a ${i}. Three is a crowd`
      : i % 5 == 0
      ? `I found a ${i}. High five!`
      : i
  );
}

let sum = 0;
for (let i = 0; i < 1000; i++) {
  sum += i % 3 == 0 || i % 5 == 0 ? i : 0;
}
console.log(sum);

sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i * 2;
}
console.log(sum);

let x = 1;
let y = 2;
let temp = 0;
console.log(x);
console.log(y);
while (y < 100) {
  temp = x + y;
  x = y;
  y = temp;
  console.log(temp);
}

x = 1;
y = 2;
temp = 0;
sum = 2;
while (true) {
  temp = x + y;
  if (temp > 4000000) break;
  else if (temp % 2 === 0) sum += temp;
  x = y;
  y = temp;
}
console.log(sum);

const boardSize = 16;
for (let i = 0; i < boardSize; i++) {
  let output = "";
  for (let j = 0; j < boardSize; j++) {
    if ((i % 2 == 1 && j % 2 == 0) || (i % 2 == 0 && j % 2 == 1)) output += "#";
    else output += " ";
  }
  console.log(output);
}
