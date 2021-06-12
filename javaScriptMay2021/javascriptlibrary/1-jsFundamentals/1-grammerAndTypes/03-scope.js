/*
SCOPE

1-grammarAndTypes
    03-scope.js
    */

    /*
What is scope?

JS has both LOCAL and GLOBAL scope
    */

var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}
scope();  //logs 13
console.log(x);  //logs 12

//example 2

var x = 12;

function scope() {
    x = 33;
    console.log(x);
}

scope()
console.log(x);

//example 3

var x = 1;

function scope() {

}

//example 4




//example 5 constrasts with 4

var x = 12

function scope() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); //45
    }
    console.log(x);  //45 -> var doesn't obey 'block' scope 
}
scope();
console.log(x);  //12