// Task 1

let id = document.getElementById("test").innerHTML = "Last";

// або
// let id = document.querySelector("div#test").innerHTML = "Last2";
// let id = document.body.children[0].innerHTML = "Last3";

// Task 2


alert(document.querySelector(".image").src = "cat.jpg");

// або
/* let newImg = document.querySelector(".image");
newImg.setAttribute("src", "../cat.jpg");
alert(newImg.getAttribute("src")) */


// Task 3
const selectorText = document.querySelectorAll("#text p");
for (let i = 0; i < selectorText.length; i++) {
    console.log("Selector text " + [i] + ": " + selectorText[i].innerText);
}


// Task 4

const list = document.querySelector("ul#list").children;

alert(list[0].innerHTML + ", " + list[4].innerHTML + ", " + list[1].innerHTML + ", " + list[3].innerHTML + ", " + list[2].innerHTML);

// або
// function showElementsFromList() {
//     let ul = Array.from(document.querySelectorAll("#list > li"));
//     alert(ul[0].innerHTML);
//     alert(ul[4].innerHTML);
//     alert(ul[1].innerHTML);
//     alert(ul[3].innerHTML);
//     alert(ul[2].innerHTML);

// }
// showElementsFromList();


// Task 5

document.querySelector("h1").style = "background: #90ee90";
document.querySelector("#myDiv").children[0].style = "font-weight: 600";
document.querySelector("#myDiv").children[1].style = "color: red";
document.querySelector("#myDiv").children[2].style = "text-decoration: underline";
document.querySelector("#myDiv").children[3].style = "font-style: italic";
document.querySelector("#myList").style = "display: flex; list-style: none";
document.querySelector("span").style = "display: none"


// Task 6

let userText1 = document.querySelector("#input1").value = prompt("White some text");
let userText2 = document.querySelector("#input2").value = prompt("White some text again");

document.querySelector("#input1").value = userText2;
document.querySelector("#input2").value = userText1;


// Task 7

const newMain = document.createElement("main");
newMain.className = "mainClass check item";
const newDiv = document.createElement("div");
newDiv.id = "myDiv";
const newP = document.createElement("p")

document.body.appendChild(newMain);
newMain.append(newDiv);
newDiv.append(newP);

newP.innerHTML = "First paragraph";