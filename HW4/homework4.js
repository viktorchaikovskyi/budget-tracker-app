//Task 1

const calcRectangleArea = function(width, height) {
    let a = width = prompt("Enter the width of the rectangle");
    let b = height = prompt("Enter the height of the rectangle");
    let S = a * b;
    if(isNaN(a) || isNaN(b)){
        throw new Error ("Invalid value. Entered data is not a number");
    } else if (a <= 0 || b <= 0){
        throw new Error ("Invalid value. Entered data is null or negative number");
    }
    return S;
}
try {
    console.log(calcRectangleArea());
} catch (error) {
    console.log(error.stack);
}


// Task 2

let checkAge = function() {
    let value = prompt("Please enter your age");

    if (value === "" || Boolean(value) === false){
        throw new Error ("The field is empty! Please enter your age");
    } else if (isNaN(value)) {
        throw new Error ("Invalid value. Entered data is not a number");
    } else if (value < 14) {
        throw new Error ("You are too young!");
    }
    return alert("Enjoy the film!")
}

try {
    checkAge();
} catch (error) {
    alert (error.name + ": " + error.message);
}


// Task 3

class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = prompt("Enter the desirable number from 1 to 12");

function showMonthName(month) {
    try {
        if (month < 1 || month > 12) {
            throw new Error ("Incorrect month number");
        } else if (isNaN(month)) {
            throw new Error ("Invalid value. Entered data is not a number");
        }
    } catch (exception) {
            console.log(exception.name + ": " + exception.message)
        }
    return monthNames[month - 1];
}
console.log(showMonthName(month))


// Task 4

function showUser(id) {
    if (id < 0) {
        throw new Error ("ID must not be negative");
};
    return {id: id};
}

function showUsers(ids) {
    let users = [];
    for (let i in ids) {
        try {
            users.push(showUser(ids[i]));
        } catch (error) {
            console.log(error + ": " + ids[i]);
        }
    }
    return users;
}
console.log (showUsers([7, -12, 44, 22]));