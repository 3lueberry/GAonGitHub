"use strict";
const contacts = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" },
];

function createTable() {
  const infoTable = document.createElement("table");
  infoTable.classList.add("info-table");
  infoTable.innerHTML = `<thead><tr><th>Name</th><th>Location</th></tr></thead><tbody></tbody>`;

  for (const contact of contacts) {
    infoTable.lastChild.append(createRow(contact));
  }
  document.querySelector(".container").appendChild(infoTable);
}

function createRow(contact) {
  const infoRow = document.createElement("tr");
  infoRow.innerHTML = `<td class="name">${contact.name}</td><td class="address">${contact.address}</td>`;
  return infoRow;
}

function addData(name, address) {
  contacts.push({ name, address });
  document
    .querySelector(".info-table")
    .lastChild.append(createRow(contacts[contacts.length - 1]));
}

createTable();
addData("Desmond", "GA");
