//el elemento padre
document.body.parentNode;
//total de elementos hijos
document.body.children.length;
document.body.childElementCount;
//primer elemento hijo
document.body.children[0];
//primer y último nodos hijo
document.body.firstElementChild;
document.body.lastElementChild;
//siguiente y anterior hermano
document.body.nextElementSibling;
document.body.previousElementSibling;

// // quearySelector() returns the first matching element or null
let nav = document.querySelector("nav");
// console.log(nav);
let active = document.querySelector(".active");
// console.log(active);

// // quearySelectorAll() returns all matching elements
let headersAndParagraphs = document.querySelectorAll("p, h1");
// console.log(headersAndParagraphs[0].innerText);

// // accesing nodes without text
// console.log(nav.children[0].children[0].children[0]);
// console.log(
//   nav.firstElementChild.firstElementChild.firstElementChild.parentNode
//     .nextElementSibling.firstChild.parentNode
// );

// // accesing with text
// console.log(headersAndParagraphs[1].firstChild);
// console.log(headersAndParagraphs[2].firstChild.nodeValue);
// console.log(headersAndParagraphs[3].innerText);
// console.log(nav.nodeName);
// console.log(
//   headersAndParagraphs[0].nextElementSibling.nextElementSibling
//     .nextElementSibling
// );


let main = document.querySelector("#first");
// console.log(main);

// console.log(nav.firstElementChild.lastElementChild.innerText);

// console.log(nav.firstElementChild.childElementCount);

// console.log(nav.firstElementChild.children.length);

// console.log(nav.firstElementChild.childNodes);

// console.log(nav.firstElementChild.firstChild.nodeValue);

//Nombre del nodo en mayúsculas
// console.log(nav.firstElementChild.nodeName);

// console.log(nav.firstElementChild.firstChild.nextSibling.nextSibling.previousSibling);
