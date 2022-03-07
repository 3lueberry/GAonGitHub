const weapon = { sword: 10, axe: 15, fist: 5 };
//there are 2 way to use this object key:value;

console.log(weapon.sword); // here sword is similar to variable
console.log(weapon["axe"]); // here "axe" string is passed in [] to get the value

let selectWeapon = Object.keys(weapon); // pulling out keys inside weapon as string array
console.log(selectWeapon);
selectWeapon = ["sword", "axe", "fist"]; // selectWeapon will be this

//so using [] notation
let useWeapon = weapon[selectWeapon[2]];
console.log(useWeapon); // fist value 5 is logged

// let useWeapon = weapon.selectWeapon[0]; will throw error cus selectWeapon is string
// Object.values(weapon) is not need in this way.
