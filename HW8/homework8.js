// Task 1
function upperCase(str) {
    let isUpperCase = /^[A-Z]/.test(str) ? console.log("String's starts with uppercase character") : console.log("String's not starts with uppercase character");
}

upperCase('regexp');
upperCase('RegExp');


// Task 2
function checkEmail(str) {
    let isEmail = console.log(/\S+@\S+\.\S+/.test(str));
};

checkEmail("Qmail2@gmail.com");

// Task 3
console.log((/d(b+)(d)/gi).exec("cdbBdbsbz"))

// Task 4
let re = /(\w+)\s(\w+)/;
console.log("Java Script".replace(re, "$2, $1")); 

// Task 5
