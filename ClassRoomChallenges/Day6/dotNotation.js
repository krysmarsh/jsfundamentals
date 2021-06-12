/***
 First create an object about themselves call the variable myInformation
 It will have the following properties:

 Name: String
 Age: Number
 numberOfSiblings: Number
 Pets: Boolean
 PetNames: Array
 mostRecentMovieWatched: String
 carsOwned: Array {make: String, model: String}
 favoriteSinger: String
 ***/

 /***
Next Challenge is to go into a group and have everyone share their object by 
sharing their screen. Anyone not currently sharing the screen will create a new 
variable called studentInformation1 and copy their object. Then so on and so 
forth, creating an object for each student in your group (studentInformation2, 
studentInformation3, etc.). You should have an object for each person in 
your group.
Create a new array with the variables that you created with your group.
***/

/***
For the final part -  console log a few sentences from the newly created 
array with the information you've all shared. 
Example. "In our group we have Taylor, Tony, and Marco. Marco has a 
Honda Civic and 2 siblings. Taylor's favorite singer is Hozier and they watched
"The Woman in the Window" recently. Tony is 24 years old has a dog named Bo. 
***/


 let myInformation = {
    name: "Krystle",
    age: 39,
    numberOfSiblings: 0,
    pets: false,
    petNames: [" "],
    mostRecentMovieWatched: "Wrath of Man",
    carsOwned: [{make: "Buick", model: "Enclave"}],
    favoriteSinger: "Adele",
 };

let studentInformation2 = {
    name: "Kareesa",
    age: 29,
    numberofSiblings: 2,
    pets: true,
    petNames: ["Millie Bobby Grey"],
    mostRecentMovieWatched: "The Lord of the Rings",
    carsOwned: [{make: "Honda", model: "Civic Hybrid"}],
    favoriteSinger: "John Mayer"
};

let studentInformation3 = {
    name: "Telma",
    age: 42,
    numberOfSiblings: 4,
    pets: true,
    mostRecentMovieWatched: "Cruella",
    carsOwned: [{make: "Volkswagen", model: "Beetle"}],
    favoriteSinger: "Lady Gaga"

};

console.log(`In our group we have ${studentInformation3.name}, ${studentInformation2.name}, ${myInformation.name}. ${myInformation.name} has a ${myInformation.carsOwned [0].make} and ${myInformation.numberOfSiblings} siblings. ${studentInformation2.name}'s favorite singer is ${studentInformation2.favoriteSinger} and they watched ${studentInformation3.mostRecentMovieWatched} recently. ${studentInformation2.name} is ${studentInformation2.age} years old.`);

let arr =  []   
