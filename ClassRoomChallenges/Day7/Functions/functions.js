    function greeting() {
        //anything inside of curly brackets will get executed if function is called
        console.log("Hello from Greeting");
    }

    greeting();  //INVOKED/CALLED THE FUNCTION

    //Expressions
//Order matters
//The key difference between a function expression and function declaration 
//-declarations get hoisted
//-expressions do not

    let greetingExpression = function() { 
        console.log("Hello from Greeting Expression");
    };
    greetingExpression();

//Create a function that, when invoked, lists out the numbers 1-10
//Create a function
//For loop inside the function
//invoke = call the function

function numbers() { 
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    } 
}
numbers();

//PARAMETERS
//Functions have parameters that are place holders for data that we can pass
//into the function when calling it

function studentGreeting(studentName) {
    console.log(`Good afternoon ${studentName}`);
}

studentGreeting("Krystle");
studentGreeting("Rob");
studentGreeting("Jeff");

/*Write a function that takes two parameters:
    - one parameter is for a first name
    - the other parameter is for last name
    -have them come together in a variable inside the function
    -console log "Hello, my name is <your name>"
    -call/invoke your function
*/
function greetingFullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(`Hello, my name is ${fullName}.`);
}
greetingFullName("Krystle", "Marshall");

function area(length, width) {
    let areaCalc = length * width
    return areaCalc 
}

let area1 = area(4, 10);
let area2 = area(5,30);
console.log(area1);
console.log(area2);

function volume(length, width, height) {
    let volumeCalc = length * width * height
    return volumeCalc 
}
let volume1 = volume(4, 10, 2);
console.log(volume1);   

//HumanAge = (DogAge-2) x 4 + 21

function convertDogYearsToHumanYears(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    return humanAge;
}
let roverAge = convertDogYearsToHumanYears(5);
console.log(roverAge);     