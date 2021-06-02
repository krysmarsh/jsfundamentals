/*
CONDITIONALS - Conditional statements control behavior in JavaScript and determine wheter or not pieces of code can run. Conditionals will cheick if an expression in true. IF the expression is true, a bloc of code will run.
*/

/* Falsy Values - considered false.

1) false
2) null
3) undefined
4) 0
5) NaN (Not a number)
6) " " (empty string)
*/

/* Truthy Values - considered true.

1) true
2) 43, -43 (number - positive and negatives)
3) "0" (string that isn't empty)
*/



let snowing = true;
//true
if (snowing == true) {
    console.log("It is snowing outside!");
}

if (snowing) {
    console.log("It is still snowing!");
}

let (snowing) = false;

if (snowing) == false;

if (snowing)== false {
    console.log(`It stopped snowing.  It's too warm.`);
}



/*
IF ELSE - If the expression is false, it will run the next block of code. The else statement specifies a block of code to be executed if the condition is false.
*/


let puppies = 3;

if (puppies < 1) {
    console.log('I need more puppies.');
} else {
    console.log("I have enough puppies!);
}

let myName = "Krystle";

if (myName == "Krystle") {
    console.log(`Hello! My name is ${myName}.`);
} else {
    console.log(`Hello, is your name ${myName}.`);
}
/*Challenges */

let myName = "Krystle";
let hisName = "Robert";

console.log("Length of Krystle's name:", myName.length)
console.log("Length of Robert's name:", hisName.length)

if (myName.length > hisName.length) {
    console.log("My name is longer than Robert's.");
} else {
    console.log("Robert's name is longer than mine.")
}
/*
function subtractNames (myName.lenghth - hisName.length)
    console.log("Robert's name is shorter than mine by ")
*/

