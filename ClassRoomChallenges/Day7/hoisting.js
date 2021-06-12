// /*
// HOISTING
// Hoisting  is used to store data to memory so that it can be reference later
// */

// console.log(firstName);
// let firstName = "Krystle";

console.log(firstName);
var firstName = "Krystle";
console.log(firstName);

example();

function example() {
    console.log("I have been hoisted!");

}

function petName(name) {
    console.log(`My cat's name is ${name}`)

}
petName("Connor");

petName("Connor");  //hoisting (context execution)

function petName(name) {
    console.log(`My cat's name is ${name}`);
}

//only declarations are hoisted
//CAN NOT INITIALIZE

console.log(hello);
hello = "hi"; //error because we are initializing it

console.log(pet1 + " and " + pet2);

var pet2 = "Chloe";
pet1 = "Connor";
