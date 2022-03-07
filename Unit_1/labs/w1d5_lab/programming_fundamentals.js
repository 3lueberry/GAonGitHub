"use strict";

/////////////////////////////
///// Programming Principles
/////////////////////////////
/*
    DRY: Don't repeat yourself! 
    summary: use loops or functions whenever possible.

    KISS: Keep it simple, silly!
    summary: choose short to the point solutions.

    Avoid creating a YAGNI: You ain't gonna need it!
    summary: don't create unnessary variable or functions.

    Do the simplest thing that could possibly work
    summary: be miniumlist; a combination of KISS && !YAGNI

    Don't make me think
    summary: codes should be readable by human and understood right away.

    Write code for the maintainer
    summary: you are not the only one who gonna see or use the codes you wrote.

    Single responsibility principle
    summary: every class or function is meant to do one job and do it well.

    Avoid premature optimisation
    summary: one step at a time. make it works. then make it better. not the other way around.

    Spearation of concerns
    summary: just like single responssiblity priciple, a set of codes should focus on thier area of expertise without overlapping with another set.

    Surprise: Premature optimisation
    reason: I always thought lesser code, lesser problem

    Struggle: Write code for the maintainer
    reason: leaving comment trails is not my strong point, esp. when I keep visiting back every lines for optimisation.
*/

/////////////////////////////
//// Commenting Code
////////////////////////////

// declare function f as constant which take limit variable l
const f = (l) => {
  // declare variable for even sum es and 3 others
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  // while loop until total sum c is larger than limit l
  while (c <= l) {
    //adding 1st value p and 2nd value c and stored it in 3rd variable n
    n = c + p;
    // replace 1st value p with 2nd value c and 2nd value c with 3rd value n for next iteration
    [c, p] = [n, c];
    // if the final result c is even, it's added to even sum total value.
    es += c % 2 === 0 ? c : 0;
  }
  // return the result of even sum es
  return es;
};

// printing the result out by calling the function f
console.log(f(55));

/*
- A more sematic name for this function would be calcEvenSum or sumOfEvens or similar.
- f2
- YES! semicon at fourth line is necessary for proper assignment on fifth line.
*/
