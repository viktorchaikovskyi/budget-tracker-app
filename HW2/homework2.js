// Task 1

let x = 1;
let y = 2;

res1 = `${x}` + `${y}`;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (y !== x ) + String(y) ;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = y > x
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = "x" / y
console.log(res4); // NaN
console.log(typeof res4); // "number"



// Task 2
 
let number = prompt ("Будь ласка, введіть випадкове число");
let result = (number % 2 == 0 && number / 2 > 0)  ? "так,число парне додатнє" : "ні, число не парне";
let result2 = (number % 7 == 0)  ? "так, число кратне числу 7" : "ні — число не кратне числу 7";

console.log(result); 
console.log(result2);


// Task 3

let randomArray = [7, "string", true, null,];
alert(`The array consists of ${randomArray.length} elements`);
console.log(randomArray);

randomArray.push (prompt("Please enter some text"));
console.log(randomArray);
alert(`The fifth element of the array is: ${randomArray[4]}`);

randomArray.shift();
console.log(randomArray)
alert(`After some manipulation, the array consists of: ${randomArray}`);

// Task 4

let cities = ["Rome", "Lviv", "Warsaw"]; 
let str = [cities.join("*")];

console.log(cities);
console.log(str);


// Task 5

let isAdult = prompt("Вам виповнилось 18 років? Зазначте, будь ласка, свій вік")

if (isAdult >= 18 && isAdult <= 120) {
    alert("Ви досягли повнолітнього віку!");
} else if (isAdult < 18 && isAdult > 0) {
    alert("Ви ще надто молоді");
} else if (isAdult >= 120) {
    prompt ("Стільки не живуть! Будь ласка, введіть свій реальний вік");
} else {
    prompt("Будь ласка, введіть додатнє числове значення");
}

// Task 6

let triangleSide1 = prompt("Enter the length of the first side of triangle");
let triangleSide2 = prompt("Enter the length of the second side of triangle");
let triangleSide3 = prompt("Enter the length of the third side of triangle");

let a = Number(triangleSide1);
let b = Number(triangleSide2);
let c = Number(triangleSide3);

let triangleSquare;
if (a, b, c > 0 && isNaN) {
// ----- Виконуємо завдання за формулою Герона ------
// Визначаємо півпериметр трикутника
let p = (a + b + c) / 2;
console.log(`Semiperimeter of the triangle is: ${p}`);
// Визначаємо площу трикутника
triangleSquare = (Math.sqrt(p * (p - a) * (p - b) * (p - c))); //
console.log(`The square of the triangle is: ${triangleSquare.toFixed(3)}`);
} else {
alert("Incorrect data. Enter the value again")
}

let isARightTriangle;
if (a, b < c || a, c < b || b, c < a
    && a ** 2 === b ** 2 + c ** 2 || b ** 2 === a ** 2 + c ** 2 || c ** 2 === b ** 2 + a ** 2
    && triangleSquare !== isNaN) {
    console.log("This is a right triangle")
} else if (a, b, c === 0, null, undefined, NaN) {
    console.log("This is not a right triangle");
} else {console.log("This is not a right triangle");
} 


// Task 7

let currentTime = new Date();

if (currentTime >= 23 && currentTime < 5) {
    alert("Доброї ночі")
} else if (currentTime >= 5 && currentTime < 11) {
    alert("Доброго ранку")
} else if (currentTime >=11 && currentTime < 17) {
    alert("Доброго дня")
} else (currentTime >= 17 && currentTime < 23); {
    alert("Доброго вечора")
};


switch (currentTime.getHours()) {
    case 23:
    case 00:
    case 01:
    case 02:
    case 03:
    case 04:
        alert("Доброї ночі");
    break;
    case 05:
    case 06:
    case 07:
    case 08:
    case 09:
    case 10:
        alert("Доброго ранку");
    break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert("Доброго дня");
    break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        alert("Доброго вечора");
    break;
}