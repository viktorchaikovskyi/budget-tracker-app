
// Task 1


// function propsCount(currentObject) {
//     return Object.keys(currentObject).length; 
// }

// let mentor = { 
//         course: "JS fundamental", 
//         duration: 3,
//         direction: "web-development" 
// };

// console.log(propsCount(mentor));

// інший спосіб розв'язання

/* const propsCount = (currentObject) => {
let count = 0;
for (let key in currentObject) {
    if (currentObject.hasOwnProperty(key)) count++;
}
return count;
}
console.log(propsCount(mentor)); */


// Task 2

/* const showProps = (obj) => Object.entries(obj);

const object = {
    artist: "Birds in Row",
    album: "Gris Klein",
    country: "France",
    releaseDate: 2022,
    genre: "melodic hardcore"
  };

console.log(showProps(object)); 
console.log(Object.values(object)); */


// Task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
    showFullName(midleName) {
       return super.showFullName() + " " + midleName; 
    }
    showCourse() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
  }
  

  const stud1 = new Student("Petro", "Petrenko", 2016);
  console.log(stud1.showFullName("Petrovych"));
  console.log("Current course: " + stud1.showCourse()); 
