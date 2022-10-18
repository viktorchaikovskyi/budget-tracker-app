// Task 2

let myLastname = "Chaikovskyi";
console.log(myLastname);


// Task 3

let band;
let song;

band = "The Cure";
song = "Friday I'm in Love";

alert(band);
alert(song);

song = band;

alert(band);
alert(song);


// Task 4

let myPet = {
    animal: "cat", 
    ageInMonths: 12,
    isTheOnlyPet: true,
    color: undefined,
    breed: null
};

console.log(myPet);

console.log(typeof myPet.animal);
console.log(typeof myPet.ageInMonths);
console.log(typeof myPet.isTheOnlyPet);
console.log(typeof myPet.color);
console.log(typeof myPet.breed)


// Task 5

let isAdult = confirm("Вам виповнилось 18 років?")

console.log(isAdult);



// Task 6

const myData = {
    name: "Viktor",
    lastname: "Chaikovskyi",
    studyGroup: "JavaScript Fundamentals",
    YEAR_OF_BIRTHDAY: 1993
};

myData['isMarried'] = false;

console.log(typeof myData.YEAR_OF_BIRTHDAY);
console.log(typeof myData.isMarried);
console.log(typeof myData.name);
console.log(typeof myData.lastname);
console.log(typeof myData.studyGroup);

myData['softSkills'] = null;
myData['englishLevel'];

console.log(typeof myData.softSkills);
console.log(typeof myData.englishLevel);


console.log(myData);

// Task 7

let userLogin = prompt("Введіть ваш логін");
let userEmail = prompt("Введіть ваш емейл");
let userPassword = prompt("Введіть ваш пароль");

alert(`Дорогий ${userLogin}! Ваш емейл - ${userEmail}, пароль - ${userPassword}`) 


// Task 8

const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_A_HOUR = 60;

const secondsInAHour = SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR;

alert(`Кількість секунд в годині складає: ${secondsInAHour}`);

const HOURS_IN_A_DAY = 24;
const secondsInADay = secondsInAHour * HOURS_IN_A_DAY;

alert(`Кількість секунд у добі складає: ${secondsInADay}`);

const daysInAMonth = prompt("Введіть значення від 28 до 31");

if (daysInAMonth == 28) {
    alert(`Кількість секунд у місяці складає: ${secondsInADay * 28}`);
} else if (daysInAMonth == 29) {
    alert(`Кількість секунд у місяці складає: ${secondsInADay * 29}`);
} else if (daysInAMonth == 30) {
    alert(`Кількість секунд у місяці складає: ${secondsInADay * 30}`);
} else if (daysInAMonth == 31) {
    alert(`Кількість секунд у місяці складає: ${secondsInADay * 31}`);
} else {
    alert("Не існує місяців із такою кількістю днів!");
}