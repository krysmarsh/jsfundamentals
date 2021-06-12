// const header = document.getElementById("header");
// console.log(header);

// header.style.color = "green";
// header.innerText = "Hello World"

// const errorList = document.getElementsByClassName("error-list");
// console.log(errorList);

// errorList[0].innerText = "I changed error 1"
// //Example 1 looping
// for (let i = 0; i < errorList.length; i ++) {
//     errorList[i].style.color = "red"
// }

// //Example 2 Looping

// for(error of errorList) {
//     error.style.color = "green"
// }

// //Example 3 Looping for each // CAN NOT DO

// //errorList.forEach(error => error.style.color = "purple")

// const tags = 
// document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText = "This is a test.  I need to change the text for the paragraph tag.  Let's see if this will work.  I am trying my best to learn this coding. Loops give me the blues!"

// const lists = 
// document.getElementsByTagName("li");
// console.log(lists);

// //lists[0].style.fontStyle = "italic"
// //lists[1].style.fontStyle = "italic"

// for(let i = 0; i < lists.length; i ++) {
//     lists[i].style.fontStyle = "italic"
// }

//const header = document.querySelector("h1");


const header = document.querySelector("#header");
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2);

const headerTags = document.querySelectorAll("h1");
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach(h => {
    h.style.color = "blue";
});

const lists = document.querySelectorAll(".error-list");

lists.forEach(li => {
    li.style.fontStyle = "italic";
});