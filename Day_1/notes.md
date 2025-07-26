### Typescript Theory

#### What is Typescript?
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Typescript is a statically typed language, which means that the type of a variable is known at compile time.

#### Why Typescript?
Typescript is a statically typed language, which means that the type of a variable is known at compile time. This makes it easier to catch errors early in the development process, and helps to improve code quality.

Typescript is also a superset of JavaScript, which means that it can be used to build JavaScript applications.

#### How Typescript Works?outD
Typescript compiler converts the code into JavaScript code which is known as transpiled code. The transpiled code is then executed by the JavaScript enginoutDe.

#### Installation
To install Typescript, you can use the npm package manager. Open your terminal and run the following command:

```
npm install -g typescript
```

This will install the Typescript compiler globally on your system.

To verify the installation, run the following command:

```
tsc --version
```

This will display the version of the Typescript compiler installed on your soutDystem.

##### Compiling Typescript Code
To compile a Typescript file, you can use the tsc command followed by the path to the file. For example, to compile a file named "hello.ts", you can run the following command:

```
tsc hello.ts
```

This will compile the "hello.ts" file and generate a JavaScript file with the same name.

You can also specify the output file using the --outFile option. For example, to compile the "hello.ts" file and generate a JavaScript file named "output.js", you can run the following command:

```
tsc hello.ts --outFile output.js
```

This will compile the "hello.ts" file and generate a JavaScript file named "output.js".

##### Running Typescript Code
To run a compiled Typescript file, you can use the node command followed by the path to the JavaScript file. For example, to run the JavaScript file "output.js", you can run the following command:

```
node output.js
```

This will execute the JavaScript code in the "output.js" file.

##### Initializing a Typescript Project
To initialize a new Typescript project, you can use the tsc command with the --init option. For example, to initialize a new Typescript project in a directory named "myProject", you can run the following command:

```
tsc --init myProject
```

This will create a new directory named "myProject" with the necessary files and directories for a Typescript project.

#### Understanding Configurations

-rootDir - Specifies the root directory of the project.
-outDir - Specifies the output directory for compiled files.
-module - Specifies the module system to use for the project.

#### Compiling Typescript Code

```tsc 
```
Then, a folder named "dist" will be created in the current directory. Inside the "dist" folder, there will be a file named "index.js" which contains the compiled code.

After compiling the code, you can run the compiled file using the node command:

```node dist/index.js
```

#### Type Annotations
TypeScript provides type annotations to help catch errors early in the development process. Here are some examples of type annotations:

```typescript
let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;
```

In the above example, we have declared three variables: name, age, and isStudent. The type of each variable is specified using a colon followed by the type.

#### Dynamic Type Determiantion
TypeScript uses a process called "dynamic type determination" to determine the type of a variable at runtime. This means that the type of a variable is determined based on its value at runtime.

For example:

```
let name = "John";
console.log(name.length); // Output: 5
```

In the above example, the type of the name variable is determined to be a string at runtime because the value of the name variable is a string.

#### Any Type
The any type is a special type in TypeScript that allows any type to be assigned to a variable. This means that the type of a variable is not determined at compile time and can be changed at runtime.

```
let name: any = "John";
name = 25; // This is allowed because the type of name is any
console.log(name); 
```

#### Type Annotation with Objects
TypeScript allows you to specify the type of properties in an object using type annotations. Here's an example:

```
let person:{
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "John",
    age: 25,
    isStudent: true
}
```

#### Type Annotation with Functions
TypeScript allows you to specify the return type of a function using type annotations. Here's an example:

```
function add(a: number, b: number): number {
    return a + b;
}
```

#### Optional and Default Parameters
Default parameters allow you to specify a default value for a parameter in a function, whereas optional parameters allow you to omit arguments when calling the function,

#### Function rest parameters
In TypeScript, rest parameters allow a function to accept an indefinite number of arguments as an array. This is useful when you don’t know in advance how many arguments a function might receive.

