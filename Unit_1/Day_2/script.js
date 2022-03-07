"use strict";

const points = [];
points.sort();
points.sort(function (a, b) {
  return a - b;
});

const function1 = function () {
  return null;
};

const function2 = () => null;

const function3 = (a, b = 5) => {
  return a - b;
};

console.log(function3(10));

const isIt = true || false ? "true" : "false";
console.log(isIt);

const setVar = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
};
const [, , x, y, , z] = setVar();
console.log(x, y, z);

const arr = [1, 2, 3, [4, 5]];
const arr1 = [...arr];
console.log(arr);
console.log(arr1);
/*
const obj = { name: "blueberry", num: 10 };
const newObj = { ...obj };
const clone = JSON.parse(JSON.stringify(obj));

const getDetails = () => {
  return { one: 1, two: 2, three: 3 };
};


const { two, three } = getDetails();
console.log(two, three);

const obj2 = {
  one: "1",
  two: "2",
  three: "3",
  foru: "4",
};

const { one, three } = obj2;
console.log(one, three);

const { one: t1, three: t3 } = obj2;
console.log(t1, t3);
*/
