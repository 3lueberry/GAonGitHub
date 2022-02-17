"use strict";

const calculateCube = (num) => {
  return num ** 3;
};

console.log(calculateCube(5));

const isAVowel = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.indexOf(char) >= 0;
};

console.log(isAVowel("aeiou"));

const getTwoLengths = (...args) => {
  const newArr = [];
  args.forEach((str) => {
    newArr.push(str.length);
  });
  return newArr;
};

const getMultipleLengths = (arr) => {
  return getTwoLengths(...arr);
};

console.log(getTwoLengths("ABCD", "DEFGHIJ", "Hank", "Hippopopalous"));
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

const maxOfThree = (...args) => {
  let max = 0;
  args.forEach((num) => {
    max = max < num ? num : max;
  });
  return max;
};

console.log(maxOfThree(6, 9, 3));

const printLongestWord = ([...args]) => {
  let len = 0;
  let longest = 0;
  args.forEach((str, i) => {
    if (str.length > len) {
      len = str.length;
      longest = i;
    }
  });
  return args[longest];
};

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "blob",
  ])
);

const transmogrify = (x, y, z) => {
  return (5 * 3) ** 2;
};

console.log(transmogrify(5, 3, 2));

const fibonLimit = (lim) => {
  const arr = [1, 2];
  for (let i = 2; i < lim; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

const fibonMax = (max) => {
  const arr = [1, 2];
  while (true) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    if (arr[arr.length - 1] > max) {
      arr.pop();
      break;
    }
  }
  return arr;
};

const euler2 = (num, fn) => {
  const arr = fn(num);
  console.log(arr);
  let sum = 0;
  for (let x of arr) if (!(x % 2)) sum += x;
  return sum;
};

console.log(euler2(32, fibonLimit));
console.log(euler2(4000000, fibonMax));

const findNeedle = (arr) => {
  return arr.indexOf("needle") >= 0
    ? `found the needle at ${arr.indexOf("needle")}`
    : `Uhoh!`;
};

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

const sumOfPositive = (arr) => {
  let sum = 0;
  for (let num of arr) if (num > 0) sum += num;
  return sum;
};

console.log(sumOfPositive([1, -4, 7, 12]));
