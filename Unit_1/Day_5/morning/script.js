"use strict";

document.querySelector("h2").innerHTML = "I have been replaced";

const image = document.querySelector("img");
image.style.display = "none";
image.style.display = "block";

image.style.filter = "grayscale(50%)";
image.style.width = "20%";

const eggos = document.createElement("img");
document.querySelector("#container").appendChild(eggos);

eggos.setAttribute(
  "src",
  "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"
);

eggos.style.width = "100%";

document.querySelectorAll("li")[0].innerText = "Demo Dog Hangout";
document.querySelectorAll("li")[4].style.color = "hotpink";
document.querySelectorAll("li")[3].remove();
