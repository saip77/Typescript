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

