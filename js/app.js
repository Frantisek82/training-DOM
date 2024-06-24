// ------classList------

// let box1 = document.body.firstElementChild.firstElementChild;
let box1 = document.querySelector("div");
console.log(box1);
// let box2 = document.body.firstElementChild.children[1];
let box2 = box1.nextElementSibling;
console.log(box2);
// let box3 = document.body.firstElementChild.children[2];
let box3 = box2.nextElementSibling;
console.log(box3);

// adding a class to the div with javascript
box1.classList.add("dark");
// removing a class from the div with javascript
box1.classList.remove("dark");
box2.classList.add("dark");
console.log(box3.classList.contains("dark"));

// the first line will add a class of "dark"
box3.classList.toggle("dark");
// the second same line will remove a class of "dark"
box3.classList.toggle("dark");
// next same line will again add a class of "dark"
box3.classList.toggle("dark");

// -----atributo dataset-----
let number = box3.dataset.boxNumber;
console.log(number);
// console.log(box3.dataset.month);
// // document.body.innerHTML = "<h1>Wow!</h1>";
// document.body.firstElementChild.innerHTML = "<h1>Wow!</h1>";
// document.querySelector("section");
// console.log(document.querySelector("section").innerHTML);
// console.log(document.querySelector("section").outerHTML);
// document.querySelector("section").outerHTML = "<h1>Wow!</h1>";

// // -----Modify content-----
// document.body.insertAdjacentHTML("afterbegin", "<nav>navigation</nav>");
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("beforebegin", "<h1>Main Header</h1>");
// document
//   .querySelector("nav")
//   .insertAdjacentHTML(
//     "beforeend",
//     '<a href="https://www.google.com/">Google</a>'
//   );
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("afterend", "<p>This is  a paragraph</p>");

// Insertar, borrar y reemplazar nodos en el arbol
// append() and prepend() arguments can be Node objects or strings
let header = document.createElement("h1"); // Create an empty <h1> element
header.append("Hello World!"); // Adding a string to <h1>
header.prepend("¡"); // Adding more characters at start of <h1>
document.body.append(header); // Adding the <h1> to body
// after() and before() work on both Element and Text nodes
document.querySelector("h1").firstChild.before("¡¡"); // Adding more text before text
let paragraph = document.createElement("p"); // Creating a new paragraph
paragraph.textContent = "writting a paragraph"; // Adding some text
document.body.append(paragraph);
// -----replaceWith() and remove() metohods-----
// document.querySelector("h1").replaceWith(paragraph);
// paragraph.remove();
// document.body.remove();
// -----styling inline-----
paragraph.style.textAlign = "center";
paragraph.style.textTransform = "capitalize";
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.padding = "2em";
paragraph.setAttribute("class", "light"); // Adding a class
// paragraph.setAttribute("class", "main");
console.log(paragraph.getAttribute("class")); // Checking element classes
paragraph.classList.add("light");
console.log(paragraph.style.cssText); // Reading all css inline styles
