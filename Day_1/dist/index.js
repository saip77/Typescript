"use strict";
console.log("Hello, World!");
//Type Annotations
const person = 'John Doe';
const age = 25;
const isStudent = false;
console.log(person, age, isStudent);
// Dynamic Type Determination
let man = 'John Doe';
console.log(man.length);
// Any Type
let anyVar = "Jane Doe";
anyVar = 25;
console.log(anyVar.length);
// Type Annotation with Objects
let user = {
    name: "John Doe",
    age: 25,
    isStudent: false
};
console.log(user);
console.log(user.name);
// Type Annotation with Functions
function mutliply(a, b) {
    return a * b;
}
console.log(mutliply(2, 3));
// Default and Optional Parameters
function Greet(name = "John", age) {
    console.log(`Hello ${name}, your age is ${age}`);
}
Greet();
Greet("Jamie");
Greet("Jane", 25);
// Rest Parameters
function greet(greeting, ...names) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`);
    }
}
greet("Hello", "Alice", "Bob", "Charlie");
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
function product(...numbers) {
    let avg = 1;
    for (const number of numbers) {
        avg *= number;
    }
    return avg;
}
console.log(product(1, 2, 3, 4, 5));
// Arrow Functions
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 5));
// Void and Never
const hello = (name) => {
    console.log(`Hello, ${name}`);
};
hello("John");
const loopForever = () => {
    while (true) {
        console.log("This will run forever");
    }
};
// loopForever();
// Union Types
let value = "Hello";
console.log(value);
value = 25;
console.log(value);
let color = "red";
console.log(color);
color = "green";
console.log(color);
let human = "John Doe";
console.log(human);
let student = {
    name: "Jane Doe",
    age: 25
};
console.log(student);
// Type Annontation with Arrays
let fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit.toUpperCase());
}
//Tuples
let article = [1, "Hello"];
console.log(article);
// Enums
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["Error"] = 400] = "Error";
    Status[Status["Redirect"] = 302] = "Redirect";
})(Status || (Status = {}));
let statusvalue = Status.Success;
console.log(statusvalue);
let employee = {
    name: "John Doe",
    age: 25,
    position: "Software Engineer",
    isPromoted: true
};
console.log(employee);
employee.name = "Jane Doe";
console.log(employee);
employee.age = 30;
console.log(employee.age);
const car = {
    color: "red",
    speed: 100,
    drive(time) {
        console.log(`Driving for ${time} seconds with color ${this.color}`);
    }
};
car.drive(5);
// Class Annotations
class Bike {
    constructor(bikeName, bikeColor, bikeSpeed) {
        this.name = bikeName;
        this.color = bikeColor;
        this.speed = bikeSpeed;
    }
    bikeProperties() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Speed: ${this.speed}`);
    }
}
const myBike = new Bike("BMW", "blue", 100);
myBike.bikeProperties();
class Dog {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound(time) {
        console.log(`${this.name} barks "${this.sound}" for ${time} seconds.`);
    }
}
const myDog = new Dog("Fido", "Woof");
myDog.makeSound(5);
