console.log("Hello, World!");

//Type Annotations
const person: string = 'John Doe';
const age: number = 25;
const isStudent: boolean = false;

console.log(person, age, isStudent);

// Dynamic Type Determination
let man = 'John Doe';
console.log(man.length);

// Any Type
let anyVar: any = "Jane Doe";
anyVar = 25;
console.log(anyVar.length);

// Type Annotation with Objects
let user:{
    name: string;
    age: number;
    isStudent: boolean;
} ={
    name: "John Doe",
    age: 25,    
    isStudent: false
}
console.log(user);
console.log(user.name);

// Type Annotation with Functions
function mutliply (a:number, b:number):number {
    return a * b;
}

console.log(mutliply(2, 3));

// Default and Optional Parameters
function Greet(name: string = "John", age?: number){
    console.log(`Hello ${name}, your age is ${age}`);
}

Greet();
Greet("Jamie");
Greet("Jane", 25);

// Rest Parameters

function greet(greeting: string, ...names: string[]) {
    for (const name of names) {
      console.log(`${greeting}, ${name}!`);
    }
  }
  
  greet("Hello", "Alice", "Bob", "Charlie");

function sum(...numbers: number[]) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5));

function product(...numbers: number[]) {
    let avg=1;
    for(const number of numbers){
        avg*=number;
    }
    return avg;
}
console.log(product(1,2,3,4,5));

// Arrow Functions
const subtract = (a:number, b:number): number =>{
    return a - b;
}
console.log(subtract(10, 5));

// Void and Never
const hello = (name:string): void =>{
    console.log(`Hello, ${name}`);
}
hello("John");

const loopForever = (): never => {  
    while (true) {
        console.log("This will run forever");
    }
}

// loopForever();

// Union Types
let value: string | number = "Hello";
console.log(value);
value = 25;
console.log(value);

// Literal Types
type Color = "red" | "green" | "blue";

let color: Color = "red";
console.log(color);

color = "green";
console.log(color);

// color = "yellow"; // This will cause a TypeScript error because "yellow" is not a valid Color type

//Type Aliases
type Name = string;

let human:Name = "John Doe";
console.log(human);

// Intersection Types
type FirstType ={
    name:string;
}
type SecondType = {
    age:number;
}
let student: FirstType & SecondType = {
    name: "Jane Doe",
    age: 25
};
console.log(student);

// Type Annontation with Arrays
let fruits: string[] = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit.toUpperCase());
}

//Tuples
let article: [number, string] = [1, "Hello"];
console.log(article);

// Enums
enum Status {
    Success = 200,
    Error = 400,
    Redirect = 302
}

let statusvalue: Status = Status.Success;
console.log(statusvalue);

// Interfaces
interface Employee {
    name: string;
    age: number;
    position: string;
    isPromoted: boolean;
}
let employee: Employee = {
    name: "John Doe",
    age: 25,
    position: "Software Engineer",
    isPromoted: true
}
console.log(employee);

employee.name = "Jane Doe";
console.log(employee);
employee.age = 30;
console.log(employee.age);

//  Interface method and parameter

interface Vehicle {
    color: string;
    speed: number;
    drive(time: number): void;
}
const car: Vehicle = {
    color: "red",
    speed: 100,
    drive(time: number) {
        console.log(`Driving for ${time} seconds with color ${this.color}`);
    }
};

car.drive(5);

// Class Annotations

class Bike{
    name: string;
    color: string;
    speed: number;
    constructor(bikeName: string, bikeColor: string, bikeSpeed: number){
        this.name = bikeName;
        this.color = bikeColor;
        this.speed = bikeSpeed;
    }
    bikeProperties(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Speed: ${this.speed}`);
    }
}
const myBike = new Bike("BMW", "blue", 100);
myBike.bikeProperties();

// Implementing Interface in Class

interface Animal {
    name: string;
    sound: string;
    makeSound(time: number): void;
}

class Dog implements Animal {
    name: string;
    sound: string;
    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
    }
    makeSound(time: number): void {
        console.log(`${this.name} barks "${this.sound}" for ${time} seconds.`);
    }
}

const myDog = new Dog("Fido", "Woof");
myDog.makeSound(5);