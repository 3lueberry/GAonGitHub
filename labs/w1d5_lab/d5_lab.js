"use strict";

const { clearInterval } = require("timers");

//////////////////////
//// Callback Drills
//////////////////////

const fn1 = (param) => {
  console.log(param);
  param();
};
const fn2 = () => console.log("hi");
fn1(fn2);

const foo = (param, param2) => {
  param(param2);
};

const bar = (param) => {
  console.log(param);
};

foo(bar, "hi");

const foo1 = (param, param2) => {
  param(param2, "hello");
};

const bar1 = (param, param2) => {
  console.log(param2);
};

foo1(bar1, "hi");

const baz = (param) => {
  console.log(param.toUpperCase());
};
foo(baz, "hello");

//////////////////////////
//// Electric Mixer
/////////////////////////

const electricMixer = (attachment) => {
  console.log("This mixer is now: " + attachment());
};

electricMixer(() => {
  return "spiralizing";
});

const spiralizer = () => {
  return "spiralizing";
};

electricMixer(spiralizer);

const slicerDicer = () => {
  return "slicin' and dicin'";
};

electricMixer(spiralizer);
electricMixer(slicerDicer);

const blender = () => {
  return "blending";
};

electricMixer(blender);

/////////////////////
/// setInterval & setTimeout
/////////////////////

let i = 1;

const myInterval = setInterval(() => {
  console.log(i);
  i++;
}, 100);

setTimeout(() => {
  clearInterval(myInterval);
}, 1050);

/////////////////////////////
//// Rep Master
/////////////////////////////

const wordReverse = (str) => str.split(" ").reverse().join(" ");
const toUpperCase = (str) => str.toUpperCase();
const repMaster = (str, fn) =>
  console.log(fn(str) + " proves that I am the rep MASTER!");

repMaster("Never give your heart to a blockhead", wordReverse);
repMaster("I finished this practice", toUpperCase);

//////////////////////////
////// .count() / .unique()
//////////////////////////

const obj = {
  arr: "A quick brown fox jumps over the wall zealously.".split(""),

  count: (arr) => {
    const newArr = [];
    arr.forEach((item) => {
      const newItem = newArr.find((i) => i.item === item);
      if (newItem === undefined) {
        newArr.push({ item: item, count: 1 });
      } else newItem.count++;
    });
    newArr.sort((prod1, prod2) =>
      prod1["item"].toLowerCase().localeCompare(prod2["item"].toLowerCase())
    );
    return newArr;
  },

  unique: (arr) => {
    const newArr = [];
    arr.forEach((item) => {
      if (newArr.indexOf(item) === -1) newArr.push(item);
    });
    newArr.sort((prod1, prod2) =>
      prod1.toLowerCase().localeCompare(prod2.toLowerCase())
    );
    return newArr;
  },
};

console.log(obj.count(obj.arr));
console.log(obj.unique(obj.arr));

//////////////////////////
////// .unique()
//////////////////////////
