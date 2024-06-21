// let box1 = document.body.firstElementChild.firstElementChild;
let box1 = document.querySelector("div");
console.log(box1);
// let box2 = document.body.firstElementChild.children[1];
let box2 = box1.nextElementSibling;
console.log(box2);
// let box3 = document.body.firstElementChild.children[2];
let box3 = box2.nextElementSibling;
console.log(box3);

//adding a class to the div with javascript
box1.classList.add("dark");
//removing a class from the div with javascript
box1.classList.remove("dark");
box2.classList.add("dark");
console.log(box3.classList.contains("dark"));

//the first line will add a class of "dark"
box3.classList.toggle("dark");
//the second same line will remove a class of "dark"
box3.classList.toggle("dark");
//next same line will again add a class of "dark"
box3.classList.toggle("dark");
