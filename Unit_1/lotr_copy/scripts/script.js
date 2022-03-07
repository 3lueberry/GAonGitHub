"use strict";

const log = (...args) => console.log(...args);
const random = (a, b = 0) => Math.floor(Math.random() * (a - b) + b);

const create = (str) => {
  const blueQuery = {
    append: (parent, node, prepend = false) => {
      if (typeof parent === "string") parent = document.querySelector(parent);
      if (prepend) {
        parent.insertBefore(node, parent.firstChild);
      } else {
        parent.appendChild(node);
      }
    },
    insert: (sibling, node, before = false) => {
      if (typeof sibling === "string")
        sibling = document.querySelector(sibling);
      if (before) {
        sibling.parentNode.insertBefore(node, sibling);
      } else {
        sibling.parentNode.insertBefore(node, sibling.nextSibling);
      }
    },

    removeItem: (item) => {
      item.remove();
    },

    find: (tag, str, fn) => {
      let findStuffs = document.querySelectorAll(tag);
      log(findStuffs);
      findStuffs.forEach((item) => {
        if (
          item.innerText.toLowerCase().split(" ").indexOf(str) > 0 ||
          item.innerText.toLowerCase() === str
        ) {
          if (fn !== undefined) fn(item); // use callback fn() if defined
          findStuffs = item;
        }
      });
      return findStuffs;
    },
  };
  str = str.split(">>");
  blueQuery.tagName = str.shift();
  let tag = document.createElement(blueQuery.tagName);
  str = str[0].split("$$");
  blueQuery.attr = {};
  for (let i = 0; i < str.length - 1; i++) {
    let attrName = str[i].split("=")[0];
    let attrValue = str[i].split("=")[1];
    blueQuery.attr[attrName] = attrValue;
    tag.setAttribute(attrName, attrValue);
  }
  blueQuery.text = str[str.length - 1];
  tag.innerText = blueQuery.text;
  log(tag);
  blueQuery.html = tag;
  return blueQuery;
};
