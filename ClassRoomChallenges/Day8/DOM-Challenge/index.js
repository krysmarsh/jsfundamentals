/* 
BRONZE - 
Connect your js file to your html file.
In your html file, create an h1 element with an id of "title".
In your js file, grab your h1 element by its id. 
In your js file, use a property to add text to your h1 element
that says, "This is my Todo List:".
Still in your js file, use a property to style your h1 element and
make it the hex color: "#A9A9A9".
*/

let title = document.getElementById("title");
title.innerText = "This is my Todo List";
title.style.color = "#A9A9A9";


/*function toDoList() {
    title.innerText = "This is my Todo List";
    title.style.color = "#A9A9A9"
} */
//toDoList();

//document.getElementsByTagName("h1");


//console.log(typeof team1Points.innerText);

/* 
SILVER - 
In your html file, create a div element underneath your h1 element
with an id of "div".
In your js file, grab your div element by its id. Still in your js
file, create a new paragraph element. Inside the paragraph element
put in a dummy text (Lorem ipsum). Change the color of the paragraph
text to: "#6495ED". Nest the paragraph element inside the div
element.
*/

let divPara = document.getElementById("div");

let addParagraph = document.createElement("p");

divPara.appendChild(addParagraph);

addParagraph.innerText = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
divPara.style.color= "#6495ED";

/* 
GOLD - 
In your html file underneath your div element, create an unorganized list
element with an id of "list".
In your js file, grab your ul element by its id. 
Create an array in your js file with 4 different items for your to-do
list. 
Now use a method to go over all the array items. For each item, 
create an li element and put the value of that item into your li element. Append 
the li element to the ul element of "list".
*/

let list = document.getElementById("list");
let arrayList = ["laundry", "dust", "cook", "mop"];

arrayList.forEach((item) => {
let li = document.createElement("li");
li.innerText = item;
list.append(li);
});
