"use strict";

function generateQuilt(j) {
  for (let i = 1; i <= j; i++) {
    makeSquare(i);
  }
}

function randomColourRGB() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function makeSquare(i) {
  const square = document.createElement("div");
  square.className = "square";
  const color = randomColourRGB();
  square.style.backgroundColor = color;
  square.style.borderColor = color;
  // const reverseColor = color.replace("rgba(", "").replace(")", "").split(",");
  // for (let rColor of reverseColor) rColor = 255 - rColor;
  // square.style.color = reverseColor;
  square.innerText = i;
  document.querySelector("#quilt").append(square);
}

generateQuilt(8);
