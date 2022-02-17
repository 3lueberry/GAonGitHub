"use strict";

// single line arrow function without {} => return

const nums = [32, 33, 14, 40];
const greaterThan18 = (num) => num > 18;
console.log(nums.every(greaterThan18));
console.log(nums.filter(greaterThan18));
console.log(nums.find(greaterThan18));
console.log(nums.findIndex(greaterThan18));
console.log(nums.some(greaterThan18));
console.log(nums.map(greaterThan18));

nums.map(console.log);

const print = (item, index) => console.log(`${item} ==> ${index}`);
nums.forEach(print);

const subtract = (total, num) => total - num;
const addition = (total, num) => total + num;
console.log(nums.reduce(subtract));
console.log(nums.reduce(addition));

nums.reduce(console.log);

///////////////////////
////// ThisIsAClass
///////////////////////

class Animal {
  constructor(name, type, numOfLegs = 4) {
    (this.name = name), (this.type = type), (this.numOfLegs = numOfLegs);
  }

  greet() {
    console.log(`Hi! This is ${this.name}.`);
  }

  animalType() {
    console.log(`It's a ${this.type}.`);
  }

  //this.console.log(); <= not gonna work!
}

const dog = new Animal("Buster", "Dog", 4);
dog.greet();
dog.animalType();

let num1 = 0,
  str1 = "",
  bool1 = false;
console.log(num1, str1, bool1);

////////////////////////
///// ThisIsConfusing
////////////////////////

class Person {
  constructor(name, yob) {
    (this.name = name), (this.yob = yob);
  }

  /*greet() {
    console.log(`Hi! My name is ${this.name}.`);
  }

  age() {
    console.log(`I'm ${2022 - this.yearOfBirth}.`);
  }*/

  /*
  setYearOfBirth(year) {
    this.yearOfBirth = year;
  }

  getYearOfBirth() {
    return this.yearOfBirth;
    console.log(this.yearOfBirth);
  */

  set yearOfBirth(year) {
    this.yob = year;
  }

  get yearOfBirth() {
    return this.yob;
  }

  greet(person = this) {
    console.log(`Hi there ${person.name}.`);
  }

  age(person = this) {
    if (this === person) console.log(`I'm ${2022 - this.yearOfBirth}.`);
    else if (this.age > person.age)
      console.log(`${this.name} is older than ${person.name}`);
    else console.log(`${this.name} is younger than ${person.name}`);
  }

  #iAmPrivate() {}
}

const john = new Person("John", 1980);
const paul = new Person("Paul", 2000);
john.greet();
john.age();
john.yob = 1987;
john.age();
john.yearOfBirth = 1992;
console.log(john.yearOfBirth);
john.age();
john.greet(paul);
john.age(paul);

/////////////////////////
///// MoreClasses
/////////////////////////

class Character {
  constructor(hitpoints = 100, weapon = false, movement = 10) {
    (this.hitpoints = hitpoints),
      (this.weapon = weapon),
      (this.movement = movement);
  }

  static damange(amount) {
    this.hitpoints -= amount;
    return this.hitpoints;
  }

  damange(amount) {
    this.hitpoints -= amount;
    return this.hitpoints;
  }
}

class Worker extends Character {
  constructor(testing) {
    super();
    this.testing = testing;
  }
}

class Warrior extends Character {
  constructor(
    hitpoints = 300,
    weapon = true,
    movement = 20,
    weaponDamage = 20
  ) {
    super(hitpoints, weapon, movement);
    this.weaponDamage = weaponDamage;
  }

  fight() {
    return Math.floor(Math.random() * this.weaponDamage);
  }

  damange(amount, defense) {
    this.hitpoints -= amount - defense;
    return this.hitpoints;
  }
}

const blueberry = new Warrior();
const chocolatepie = new Character();

console.log(blueberry.damange(20, 10));
console.log(blueberry.damange(20));
console.log(chocolatepie.damange(20));

console.log(blueberry);

const damage = blueberry.fight();
console.log(damage);
console.log(chocolatepie.damange(damage));

console.log(Worker.damange());
