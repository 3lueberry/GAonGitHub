"use strict";

const printGreeting = (name) => {
  return `Hello there, ${name}!`;
};

console.log(printGreeting("Slimer"));

const reverseWordOrder = (str) => {
  const words = str.split(" ");
  words.reverse();
  return words.join(" ");
};

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mult":
      return num1 * num2;
    case "div":
      return num1 / num2;
    case "exp":
      return num1 ** num2;
  }
};

console.log(calculate(5, 7, "add"));
console.log(calculate(4, 3, "sub"));
console.log(calculate(3, 2, "mult"));
console.log(calculate(12, 3, "div"));
console.log(calculate(4, 3, "exp"));

const printConsecutives = (arr) => {
  let [x, y] = arr;
  for (let i = 2; i < arr.length; i++) {
    //console.log(x, y, arr[i]);
    if (x + 1 === y && y === arr[i] - 1) {
      console.log(x, y, arr[i]);
    }
    x = y;
    y = arr[i];
  }
};

printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

const letterReverse = (str) => {
  const words = str.split(" ");
  for (let w of words) {
    const x = [];
    for (let c of w) x.unshift(c);
    words.splice(words.indexOf(w), 1, x.join(""));
  }
  return words.join(" ");
};

console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));
