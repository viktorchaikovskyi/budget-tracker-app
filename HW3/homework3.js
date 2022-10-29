
// Task 1


let numbers = [2, 3, 4, 5];
let total1 = 1;
let total2 = 1;

for (let i = 0; i < numbers.length; i += 1) {
    total1 *= numbers[i];
    
};
console.log(total1);

let i = 0;
while (i < numbers.length) {
    total2 *= numbers[i];
    i += 1; 
};
console.log(total2);


// Task 2

for (let i = 0; i < 16; i += 1) {
    if (i % 2 === 0) {
        console.log([i] + " is even");
    } else {console.log([i] + " is odd")};
};


// Task 3

let array = [];
function randArray(k) {
        min = 1; max = 500;
        for (let i = 1; i <= k; i += 1) {
        array.push(Math.floor(Math.random() * (max - min +1) + min));
    }
    return array;
    }
    console.log(randArray(5))


// Task 4

function raiseToDegree(a, b) {
    a = +prompt("write any number");
    b = +prompt("write any number again");
    if (Number.isInteger(a) && Number.isInteger(b) && (a, b) !== NaN ) {
        return a ** b;
    } else {
        alert("one of the entered values is not a number! write a correct value!");
        return raiseToDegree(a, b);
    };
}
console.log(raiseToDegree())


// Task 5

function findMin() {
    return Math.min.apply(null, arguments);
    }

    console.log(findMin(12, 14, 4, -4, 0.2))


// Task 6

function findUnique(arr) {
    return new Set(arr).size === arr.length;
    }
     
    console.log(findUnique([1, 2, 3, 5, 3]));
    console.log(findUnique([1, 2, 3, 5, 11]));


// Task 7

function lastElem(arr, _range) {
    if (_range === undefined) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(-_range);
    };
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));


// Task 8 

function capitalize(str) {
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
 arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
return arr.join(" ");
}
console.log(capitalize("i love java script"));

// розвзок за допомогою регулярного виразу
/* function capitalize(str) {
    if (!str) return str;
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(capitalize("i love java script")); */

