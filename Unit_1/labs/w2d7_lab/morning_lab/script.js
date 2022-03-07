"use strict";

const log = (str) => console.log(str);
const random = (a) => Math.floor(Math.random() * a);

let doc = document.createElement("div");
doc.classList.add("document");
doc.innerText = "<HTML>";

const htmlTree = [
  ["head", "body"],
  ["header", "div .container", "footer"],
  ["h2", "h4", "ol", "div .document"],
  ["li"],
];

for (let i = 0; i < htmlTree.length; i++) {
  let child = document.createElement("ul");
  child.className = "tree t" + (i + 1);
  child.style.listStyle = "none";
  for (let j = 0; j < htmlTree[i].length; j++) {
    let child2 = document.createElement("li");
    child2.className = htmlTree[i][j];
    child2.innerText = "<" + htmlTree[i][j] + ">";
    child.appendChild(child2);
  }
  doc.appendChild(child);
}

document.querySelector(".container").appendChild(doc);

const dom = document.querySelector("body");
const domAll = document.querySelectorAll(".ol-list");
log(dom);
log(domAll);

const h2 = document.querySelector("h2");
h2.innerText += "!!!";

log(domAll[0]);
domAll.forEach((li) => {
  li.style.color = "red";
});
domAll[0].style.color = "blue";
domAll[domAll.length - 1].innerText = "Jamboree sandwich at the Jambo-ree";

doc = document.createElement("img");
doc.setAttribute("src", "dougie.gif");
doc.style.width = "200px";
log(doc);
document.querySelector(".container").appendChild(doc);

/*
let rm = document.querySelector("img");
rm.remove();
*/
