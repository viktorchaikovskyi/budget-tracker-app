// Task 1

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

// інший спосіб розв'язання

// const propsCount = (currentObject) => {
// let count = 0;
// for (let key in currentObject) {
//     if (currentObject.hasOwnProperty(key)) count++;
// }
// return count;
// }

console.log(propsCount(mentor));

// Task 2

const showProps = (obj) => [Object.keys(obj), Object.values(obj)];

const object = {
  artist: "Birds in Row",
  album: "Gris Klein",
  country: "France",
  releaseDate: 2022,
  genre: "melodic hardcore",
};

console.log(showProps(object));

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

// Task 4

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    console.log(this.fullName + " salary: " + this.dayRate * this.workingDays);
  }
  #experience = 1.2;
  showSalaryWithExperience() {
    console.log(
      this.fullName +
        " salary: " +
        this.dayRate * this.workingDays * this.#experience
    );
  }
  showSalaryWorker() {
    return this.dayRate * this.workingDays * this.#experience;
  }
  get showExp() {
    return this.#experience;
  }
  set setExp(experience) {
    this.#experience = experience;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log("                  ");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log("                  ");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log("                  ");

let workersArray = [worker1, worker2, worker3];

function sortWorkersBySalary(workers) {
  let sortedBySalary = workers.sort(function (a, b) {
    return a.showSalaryWorker() - b.showSalaryWorker();
  });

  for (let i = 0; i < sortedBySalary.length; i++) {
    console.log(
      sortedBySalary[i].fullName + ": " + sortedBySalary[i].showSalaryWorker()
    );
  }
}
console.log("Sorted salary: ");
sortWorkersBySalary(workersArray);

// Task 4

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, h) {
    super();
    this.base = a;
    this.height = h;
  }
  getArea() {
    return 0.5 * (this.height * this.base);
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.side = a;
  }
  getArea() {
    return this.side ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.radius = r;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
  return figures.reduce((sum, figure) => {
    if (figure instanceof GeometricFigure) {
      console.log(
        `Geometric figure: ${
          figure.constructor.name
        } - area: ${figure.getArea()}`
      );
      return sum + figure.getArea();
    } else {
      console.log("Sorry. Something went wrong");
    }
  }, 0);
}

console.log(handleFigures(figures));
