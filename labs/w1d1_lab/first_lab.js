console.log("Making your way in the world today takes everything you've got.");

console.log("Taking a break from all your worries, sure would help a lot.");

console.log("Wouldn't you like to get away?");

console.log("Sometimes you want to go");

console.log("Where everybody knows your name,");

//console.lo("and they're always glad you came.");
//TypeError: console.lo is not a function at Object.<anonymous>
console.log("and they're always glad you came.");

//console.log("You wanna be where you can see,";
//SyntaxError: missing ) after argument list
console.log("You wanna be where you can see,");

console.log("our troubles are all the same");

//console.log("You wanna be where" "everybody knows");
//SyntaxError: missing ) after argument list -- missing + operator
console.log("You wanna be where" + "everybody knows");

console.log("Your name.");

console.log(999 > 999); // false
console.log(999 == 999); // true
console.log(999 == "999"); // true
console.log(999 != 999); // false
console.log(999 === 999); // true
console.log(-5 >= -4); // false
console.log(100 <= -100); // false
console.log(20 + 5 < 5); // false
console.log(81 / 9 == 9); // true
console.log(9 != 8 + 1); // false
console.log(2 * 5 === "25"); // false

/*
the **assignment operator** `=`
-- assign value to the variable

the **equality operator** `==`
-- compare 2 values (ignore type)

and the **strict equality comparison operator** `===`
-- compare 2 values && types
*/

// _while_ loop #1, #2 & #3
let i = 0;
while (i < 1000) {
  i++;
  console.log(`Ginger chocolate honey patties times ${i}.`);
}

for (i = 0; i <= 100; i++) {
  console.log(`For Loop ${i}.`);
}

for (i = 7; i <= 635; i++) {
  console.log(`Counting 7 to 635: ${i}`);
}

let start = 0;
const limit = 100;

for (start; start <= limit; start++) {
  console.log(`${start} of ${limit};`);
}

let today = 1;
const yearEnd = 365;
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const mthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let thisMonth = 0;
let numOfDays = 0;

for (today; today <= yearEnd; today++) {
  console.log(`${mthNames[thisMonth]} ${today - numOfDays}.`);
  if (today === numOfDays + months[thisMonth]) {
    numOfDays += months[thisMonth];
    thisMonth++;
  }
}
