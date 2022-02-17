"use strict";

const arr = [1, 2, 3, 4, 5, [6, 7]];
const arr1 = [...arr];

const [a, b, , , , g] = [...arr];
console.log(g);

g[1] = 8;
console.log(arr[5][1]);

const spreadArr = [];

for (let i = 0; i < arr.length; i++) {
  spreadArr.push("x" + i);
}

spreadArr = [...arr];
console.log(spreadArr);

/*
    Objects.keys(object).length
    Objects.values(object)
    Objects.entries(object)
*/

//////// Callback Functions /////// pass only the name

const allUpper = (str) => {
  return str.toUpperCase();
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const upperLastWord = (str) => {
  const splitString = str.split(" ");
  splitString[splitString.length - 1] =
    splitString[splitString.length - 1].toUpperCase();
  return splitString.join(" ");
};

//////// Higher Order Function ////////

const transform = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`New string: ${fn(str)}`);
  console.log(`Function used: ${fn.name}`);
};

transform("JavaScript is the best!", upperFirstWord);
transform("JavaScript is the best!", upperLastWord);
transform("JavaScript is the best!", allUpper);
