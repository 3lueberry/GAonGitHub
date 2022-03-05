"use strict";

const log = (...args) => console.log(...args);
const random = (a, b = 0) => Math.floor(Math.random() * (a - b) + b);

/*

document(capture){
    body(capture){
        div(capture){
            p(capture){
                button(capture)
                return target;
            }
            return target;
        }
        return target;
    }
    return target;
}

*/

function randomColourRGB() {
  const red = random(256);
  const green = random(256);
  const blue = random(256);
  return `rgb(${red}, ${green}, ${blue})`;
}

document.querySelector("button").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColourRGB();
  log("button", e.target, e.currentTarget);
  //e.stopPropagation();
});

document.querySelector("p").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColourRGB();
    log("p", e.target, e.currentTarget);
  },
  true
);

document.querySelector("div").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColourRGB();
  log("div", e.target, e.currentTarget);
});

document.querySelector("body").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColourRGB();
  log("body", e.target, e.currentTarget);
});

/*
document.addEventListener("click", function (e) {
  this.style.backgroundColor = randomColourRGB();
  log("document", e.target, e.currentTarget);
});*/

window.addEventListener("keydown", function (e) {
  log(e.key, e.target, e.currentTarget);
});
