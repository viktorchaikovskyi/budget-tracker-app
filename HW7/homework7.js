// Task 1

/* let newWin = window.open('/', 'task 1', 'width=300,height=300');
setTimeout (function() {
    newWin.resizeTo(width=500, height=500);
    setTimeout (function() {
        newWin.moveTo(200, 200);
        setTimeout (function () {
            newWin.close()
        }, 2000)
    }, 2000)
}, 2000); */


// Task 2

/* function changeCSS() {
    document.getElementById("text").style = "color: orange; font-size: 20px; font-family: Comic Sans MS"
} */


// Task 3

/* let changeBackground1 = () => document.querySelector("#task3").style = "background-color: blue";
let changeBackground2 = () => document.querySelector("#task3").style = "background-color: pink";
let changeBackground3 = () => document.querySelector("#task3").style = "background-color: brown";
let changeBackground4 = () => document.querySelector("#task3").style = "background-color: yellow";
let changeBackground5 = () => document.querySelector("#task3").style = "background-color: white";

btn1.addEventListener("click", changeBackground1);
btn2.addEventListener("dblclick", changeBackground2);
btn3.addEventListener("mousedown", changeBackground3)
btn3.addEventListener("mouseup", changeBackground5);
link.addEventListener ("mouseover", changeBackground4);
link.addEventListener ("mouseout", changeBackground5); */


// Task 5

/* document.querySelector("#livebtn").onclick = function () {
    message.insertAdjacentHTML("beforeend", "<p>I was pressed!</p>") 
};
document.querySelector("#livebtn").onmouseover = function() {
    message.insertAdjacentHTML("beforeend", "<p>Mouse on me!</p>")
};
document.querySelector("#livebtn").onmouseout = function() {
    message.insertAdjacentHTML("beforeend", "<p>Mouse is not on me!</p>")
}; */


// Task 6

/* window.onresize = () => document.getElementById("window-size").innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}` */