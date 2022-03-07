"use strict";

const getData = function () {
  fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json`)
    .then((response) => response.json())
    .then((json_data) => console.log(json_data))
    .catch((err) => console.error(err.text));
};
getData();
console.log(`Am I doing anything?`);

const getDataAsync = async function (arg) {
  try {
    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(error.message);
  }
};

getDataAsync().then((data) => {
  console.log(data);
});

const getMultiple = async (...args) => {
  try {
    const response = await Promise.all(args.map((arg) => getDataAsync(arg)));
    console.log(response);
    console.log(response.map((d) => d.agency));
  } catch (err) {
    console.log(err.message);
  }
};

// const data = getDataAsync();
// console.log(data);

console.log(`Am I doing anything, again?`);
