"use strict";

const quotes = ["Quote 1", "Quote2", "Quote3"];
const randomThings = [1, 10, "Hello", true];

console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings[2]);

const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"];
console.log(ourClass[2]);
ourClass[2] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

const myArray = [5, 10, 500, 20];
myArray.push("Egon");
console.log(myArray);
myArray.pop();
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.shift();
console.log(myArray);
console.log(myArray.reverse());

for (const item of myArray) {
  if (item < 100) console.log(`${item} is little number`);
  else console.log(`${item} is big number`);
}

for (const item of myArray) {
  if (item < 5) console.log(`${item} is little number`);
  else if (item > 10) console.log(`${item} is big number`);
  else console.log("monkey!");
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
const kristynShoe = kristynsCloset.shift();
console.log(kristynShoe);
kristynsCloset.splice(-1, 0, "raybans");
console.log(kristynsCloset);
kristynsCloset[4] = "stained knit hat";
console.log(kristynsCloset);

kristynsCloset[-3] = "funny clown";
kristynsCloset[-4] = "another clown";
console.log(kristynsCloset);

const thomsOOTD = [];
thomsOOTD.push(thomsCloset[0][0]);
thomsOOTD.push(thomsCloset[1][1]);
thomsOOTD.push(thomsCloset[2][2]);
console.log(
  `Thom is looking fierce in a ${thomsOOTD[0]}, ${thomsOOTD[1]} and ${thomsOOTD[2]}`
);
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

const twoDArray = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

for (let i = 2; i >= 0; i--)
  for (let j = 2; j >= 0; j--) console.log(twoDArray[i][j]);

twoDArray.reverse();
for (let itemArr of twoDArray) {
  itemArr.reverse();
  for (let item of itemArr) console.log(item);
}

const array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(array.length);

const spiral = (arr) => {
  let n = arr[0].length;
  let m = arr.length;
  const result = [];
  const check = [];
  for (let i = 0; i < m; i++) {
    check[i] = [];
    for (let j = 0; j < n; j++) check[i][j] = false;
  }

  let hor = [1, 0, -1, 0];
  let ver = [0, 1, 0, -1];
  let changeDir = 0;
  let x = 0;
  let y = 0;
  for (let k = 0; k < n * m; k++) {
    result.push(arr[y][x]);
    check[y][x] = true;

    let nextX = x + hor[changeDir];
    let nextY = y + ver[changeDir];

    if (
      nextX >= 0 &&
      nextX < n &&
      nextY >= 0 &&
      nextY < m &&
      !check[nextY][nextX]
    ) {
      x = nextX;
      y = nextY;
    } else {
      changeDir = (changeDir + 1) % 4;
      x += hor[changeDir];
      y += ver[changeDir];
    }
  }
  return result;
};

const b = [
  [1, 2, 3, 4, 5, 6],
  [18, 19, 20, 21, 22, 7],
  [17, 28, 29, 30, 23, 8],
  [16, 27, 26, 25, 24, 9],
  [15, 14, 13, 12, 11, 10],
];

const c = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [36, 37, 38, 39, 40, 41, 42, 43, 44, 11],
  [35, 64, 65, 66, 67, 68, 69, 70, 45, 12],
  [34, 63, 84, 85, 86, 87, 88, 71, 46, 13],
  [33, 62, 83, 96, 97, 98, 89, 72, 47, 14],
  [32, 61, 82, 95, 100, 99, 90, 73, 48, 15],
  [31, 60, 81, 94, 93, 92, 91, 74, 49, 16],
  [30, 59, 80, 79, 78, 77, 76, 75, 50, 17],
  [29, 58, 57, 56, 55, 54, 53, 52, 51, 18],
  [28, 27, 26, 25, 24, 23, 22, 21, 20, 19],
];

console.log(spiral(array));
console.log(spiral(b));
console.log(spiral(c));

const spiral2 = (arr) => {
  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;
  const result = [];
  while (true) {
    for (let x = startCol; x <= endCol; x++) result.push(arr[startRow][x]);
    startRow++;
    if (startRow > endRow || startCol > endCol) break;

    for (let y = startRow; y <= endRow; y++) result.push(arr[y][endCol]);
    endCol--;
    if (startRow > endRow || startCol > endCol) break;

    for (let x = endCol; x >= startCol; x--) result.push(arr[endRow][x]);
    endRow--;
    if (startRow > endRow || startCol > endCol) break;

    for (let y = endRow; y >= startRow; y--) result.push(arr[y][startCol]);
    startCol++;
    if (startRow > endRow || startCol > endCol) break;
  }
  console.log(startRow, endRow, startCol, endCol);
  return result;
};

console.log(spiral2(array));
console.log(spiral2(b));
console.log(spiral2(c));

const d = [
  [1, 2, 3, 4],
  [16, 17, 18, 5],
  [15, 24, 19, 6],
  [14, 23, 20, 7],
  [13, 22, 21, 8],
  [12, 11, 10, 9],
];

console.log(spiral2(d));

const spreadArr = ([...arr]) => {
  arr[0][0] = 100;
  console.log(arr);
};

console.log(array);
spreadArr([...array]);
console.log(array);

const arr2 = [...array];
arr2[0][0] = 1;

console.log(array);
console.log(arr2);

/*
function isEmpty(array) {
  return Array.isArray(array) && (array.length == 0 || array.every(isEmpty));
}
*/

const spiral3 = (args) => {
  const arr = JSON.parse(JSON.stringify(args)); // deep clone
  let count = 0;
  let temp = 0;
  const result = [];

  //loop while array is not empty && count < 100 to stop infinite loop in case of error
  while (arr.length !== 0 && count < 100) {
    if (count % 4 === 0) {
      // left to right
      temp = arr[0].length; // hold length of top most array as it's going to change during for loop.
      for (let x = 0; x < temp; x++) result.push(arr[0].shift()); // remove first element of array until empty
      arr.shift(); // remove top most avaiable row
    } else if (count % 4 === 1) {
      // top to bottom
      for (const y of arr) result.push(y.pop()); // pop 1 last element from every array
      if (arr[0].length === 0) arr.pop(); // empty 2D array when all done
    } else if (count % 4 === 2) {
      // right to left
      temp = arr[arr.length - 1].length; // hold length of bottom most array as it's going to change during for loop.
      for (let x = 0; x < temp; x++) result.push(arr[arr.length - 1].pop()); // remove last element of array until empty
      arr.pop(); // remove bottom most avaialbe row
    } else {
      // bottom to top
      arr.reverse(); // reverse array temporary to upright sequence
      for (const y of arr) result.push(y.shift()); // shift 1 first element from every array
      arr.reverse(); // reverse array back to continue
      if (arr[0].length === 0) arr.pop(); // empty 2D array when all done
    }
    count++;
  }
  console.log("Spiral 3");
  return result;
};

console.log(spiral3(array));
console.log(spiral3(b));
console.log(spiral3(c));
console.log(spiral3(d));

console.log(typeof kristynsCloset[7]);
console.log(kristynsCloset["-3"]);
