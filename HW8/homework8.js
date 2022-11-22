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
let checkBankCard = (str) => {
    const regExp = /\d{4}-\d{4}-\d{4}-\d{4}/g;
    if (regExp.test(str)) {
        console.log("Validation successful");
    } else {
        console.log("Incorrect data input. Please try again");
    };
};

checkBankCard("9999-9999-9999-9999");
checkBankCard("fs78-6357-6424-0911");
checkBankCard("3431-9999-9999-dfrs");
checkBankCard("3431-99e99-VfDs-5478");

// Task 6
let checkEmail2 = (str) => {
    const regExp = /^[A-Za-z0-9]+([-]?\w+)*@\w+([-]?[_]\w+)*(\.\w{2,3})+$/;
    if (regExp.test(str)) {
        console.log("Email is correct");
    } else {
        console.log("Email is not correct");
    }
} 

checkEmail2('my_mail@мета.ua');
checkEmail2('my_mail@gmail.com');
checkEmail2('#my_mail@gmail.com');
checkEmail2('my_ma--il@gmail.com');
checkEmail2('my_ma--il@gm-il.c_');


// Task 7 
let checkLogin = (data) => {
    const regExp = /^\D{1}[A-Za-z0-9\.]{1,9}$/;
    const reqNub = /[\d\.]+/g;
    const resultNum = data.match(reqNub);
    const result = regExp.test(data);
    console.log(`${data} is ${result} - ${resultNum}`);
};

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');