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
