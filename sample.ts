// let sum: number = 10;

// let total = sum;

// console.log(sum);

// let isDone: boolean = false;

// console.log(typeof isDone);

// let numbers: number[] = [1, 2, 3, 4];
// numbers.splice(3, 2, 6); // numbers becomes [1, 2, 5, 4]

// console.log(numbers);

// //strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;

// //type inference
// let e = "USA";
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;

// console.log(a, b, c, e, f, g);

// let f: number | string = "Zohaib"; // This is allowed now
// f = 22;

// console.log(f);  // Outputs: 22

//use const where variable values do not change
// const a = 5;
// const b : number = 33;
// const c ="best";

// //I suggest use let instead of var everywhere,
// //becuase let has blocked scope
// if (true) {
// 	var z = 4;
// 	//use z
//     // console.log("let: " + z);// Error: z is not defined in this scope
// }
// else {
// 	let z = "string";
// 	//use z
// }
// console.log("let: " + z);// Error: z is not defined in this scope

// import inquirer from "inquirer";
// import chalk from "chalk";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));

// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

// let myAge: string | number;

// myAge = 16;//narrowing
// console.log(myAge);

// //console.log(myAge.toLowerCase());//Error

// myAge = "Dont Know";//narrowing
// console.log(myAge);

// console.log(myAge.toString()); // common to both types
//                                //can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string
//because of narrowing

let newAge = Math.random() > 0.6 ? "Khan" : 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

if (typeof newAge === "string") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

// let age: number | "died" | "unknown";

// age = 90;//OK
// age = "died";//OK
// age = "unknown";//OK
// //age = "living";//Error

// let zia: "zia";

// zia = "zia";
// //zia = "khan";//Error

// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// yourName?.toUpperCase();//OK

// // You can also define a type alias
// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;

// // Type Declaration
// let student : {
//     name: string,
//     age: number
// }

// student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student.name);
// console.log(student["age"]);

// interface Student {
//     student_id: number;
//     name: string;
//   }

// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }

// type intersected_type = Student & Teacher;

// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };

// console.log(obj1.teacher_Id);
// console.log(obj1.name);

// function error(message: string): never {
//     throw new Error(message);
// }

// function infiniteLoop(): never {
//     while (true) {}
// }

// let myname: unknown = "Zia";
// console.log((myname as string).length);
// console.log((<string> myname).length)

// enum FileAccess {
//     // Computed member
//     Read = 2 /* 1 << 1 */,
//     Write = 4 /* 1 << 2 */,
//     ReadWrite = Read | Write
// }

// let myAccess: FileAccess = FileAccess.ReadWrite;
// console.log(myAccess); // Output: 6

// enum Color {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }

// let myColor: Color = Color.Green;
// console.log(myColor); // Output: Green

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
//   }
//   console.log(Direction["Up"], Direction["Down"], Direction["Left"], Direction["Right"]);

// let x: number = 10;
// let y = x;
// console.log(x);

// function example() {

//     if (true) {
//       let blockScoped = 'I am block scoped'; // Accessible only within the if block
//       const blockScopedConst = 10; // Accessible only within the if block
//       var functionScoped = 'I am function scoped'; // Accessible throughout the function
//     }

//     console.log(blockScoped); // ReferenceError: blockScoped is not defined
//     console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
//     console.log(functionScoped); // Output: I am function scoped
//   }

// let global: string = "Zohaib";
// const global2: string = "Ali";

// function myFunctionScoped() {
//     let local: string = "Ali";
//     console.log(global);   // Logs "Zohaib"
//     console.log(local);    // Logs "Ali"
//     console.log(global2);  // Logs "Ali"
// }

// let number = [1,2,3,4]

// number.splice(2,2 , 7)

// console.log(number)

// function vaalue (a:number, b:number)
// {
//   return a+b;
// }

// let sum = vaalue(80,20);
// console.log(sum);

// function multi(a: string|number){
//    return a;
// }

// let ple = multi("Zohaib");
// console.log(ple)

// let x: string| number ;
// console.log(typeof x);

// function sum(x: number,y: number){
//     if(typeof x === "number" && typeof y === "number"){
//         return x + y;
//     }
//     else{
//         return new Error("Not a number");
//     }
// }

// let result = sum(10,20);
// console.log(result)

// let value = 10;
// console.log(typeof value);

// const value2 = 10;
// console.log(typeof value2);

// var value3 = 10;
// console.log(typeof value3);

let person: {
  name: string;
  age: number;
  email: string;
  password: any;
} = {
  name: "John",
  age: 30,
  email: "johndoe@me.com",
  password: 123456,
};

console.log(person["name"]);




let arr: any[] = ["zohaib", "ali", 10, true]; // this is array include multiple values and types

arr.splice(2, 1, 20); //this is used to remove and replace elements in the array
// arr.push(30);   // this is used to add one or more elements to the last of the array 
// arr.shift();    // this is used to remove the first element from the array
// arr.pop();     // this is used to remove the last element from the array
// arr.unshift(123456); // this is used to add one or more elements from beggining the array 


console.log(arr);


let tuple: [string, number, boolean, any?] = ["Zohaib", 34, true];

tuple.splice(2, 1, false)
tuple.push(Array)
console.log(tuple);


enum data {
    home, 
    about,
    contact,
    blog
}

console.log(data.contact);



let any: any[] = [10, 20, "home", true]

console.log(any);

// union
function union(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Numeric addition
  } else {
    return a.toString() + b.toString(); // String concatenation
  }
}

console.log(typeof union);


console.log(union("Zohaib", "Dayo")); // Output: Zohaib Dayo
console.log(union(10, 29)); // Output: 39


// union

let value: string | number;
value = "hello"; // Valid
value = 42; // Also valid

console.log(typeof value);

let literal: "abc" | 349 = "abc"; // Valid

console.log(literal);


// String literal type
let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up'; // Valid
direction = 'down'; // Valid
// direction = 'north'; // Error: Type '"north"' is not assignable to type '"up" | "down" | "left" | "right"'.

console.log(direction); // Output: "up"


function add(a: number, b: number ): number {
  return a + b;
  // return (+a) + (+b);
}

// add(10,20)
console.log(add(10, 20)); // Output: 30


// Void

function greet(): void {
  console.log("Hello world");
}
greet();

// if we used any than all thing is  good we used multiple type but
//  another variable assign is type than not show error but unknown type show error 
let DataAny: any;  //no error used other variable assign types 
// let DataAny: unknown; //this is most power is this is check key error in types

DataAny = "Zohaib",
DataAny = 9439

let item: string;

item = DataAny

// this is never

// function error(message: string): never {
//   throw new Error(message);
// }

// console.log(error("Something went wrong"));



let dataArr: number[] = [1,2,3,4];

let arr2 = dataArr;

arr2.pop();

console.log(dataArr);


// what is intersection Type in TS

type Type1 = { name: string };
type Type2 = { age: number };

type CombinedType = Type1 & Type2;

let obj: CombinedType = {
  name: "Zohaib",
  age: 34,
};

console.log(obj);



let a: boolean = true;   // this is used to assign the type to a boolean
let b: string = "Zohaib";  //  this is used to assign the type to a string
let c: number = 786;      //  this is used to assign the type to a number

console.log(a, b, c);    //  this is used to return the value of the types.


let newArr: number[] = [1, 2, 3, 4];    // this is array of the numbers

newArr.push(5); // this is used to add one or more the elements in the last of the array.
// newArr.unshift(0); // this is used to add one or more the elements in the beggining of the array.
// newArr.pop()  // this is used to remove the elements in last of the array.
// newArr.shift(); // this is used to remove the first elements of the array.
// newArr.splice(1, 1, 10)   // this is used to remove or replace the  element of the specific index from the array

console.log(newArr);



// this is tuple  

//A tuple is a typed array with a pre-defined length and types 
// for each index. Tuples are great because they allow each element 
// in the array to be a known type of value.

let newtuple: [string, number, boolean, any, unknown] = ["Zohaib", 786, true, "Any", "unknown"]

console.log(newtuple);


// this is any In TypeScript, the any type is a dynamic 
// type that can hold any value. When a variable is of 
// type any, it essentially opts out of type checking.
//  This can be useful when you're working with dynamic
//   content or when you're gradually transitioning 
//   your codebase to TypeScript and you're not 
//   sure about the types yet. However, it is generally
//    recommended to avoid using any as much as possible
//     to take advantage of TypeScript's static type 
//     checking features.

let newany: any;  // this is used to i idea what is value in giving in this variable

newany = "Zohaib",  //this is variable is string value 
newany = 3784            // this is number of vlue
newany = true         // this is boolean value

console.log(newany);   //this is any variable we used multiple type include and we used 



// this is unknown 

let newunknown: unknown;  // this is used to i idea what is value in giving in this variable

newunknown = "Zohaib",  //this is variable is string value 
newunknown = 3784            // this is number of vlue
newunknown = true         // this is boolean value

console.log(newunknown);   //this is unknown variable we used multiple type include and we used 



// In TypeScript, never is a type that represents the type of 
// values that never occur. It is used to indicate that a function
//  will not return a value or that a variable will never have a
//   value. Functions that always throw an exception or never 
//   return (like an infinite loop) are examples where never 
//   type is commonly used.

// function newNaver() : never {
//     throw new Error("Error Occured");
// }

// newNaver()


// When a function's return type is void, 
// it means the function does not return
//  any value at all.

function newVoid(): void{
  console.log("Hello World");
}

newVoid()


// what is enum is TS
// Ans: In TypeScript, an enum is a way of giving more
//  friendly names to sets of numeric values. 
//  It allows you to define a set of named constants 
//  representing numeric values. Enums are useful 
//  when you have a fixed set of values that are 
//  related and need to be represented in a more 
//  readable way in your code.
// Enums can improve code readability and maintainability 
// by giving a descriptive name to numeric values, making
//  the code more self-explanatory. They can also help catch
//   bugs at compile time if you try to assign an incorrect value.

enum newEnum {
  up = "Up",
  down = "Down",
  left = "Left",
  right = "Right",
}
console.log(newEnum.up, newEnum.down, newEnum.left, newEnum.right);


// what is type inference
// Ans: Type inference in TypeScript refers
//  to the ability of the compiler to 
//  automatically determine the type of 
//  a variable based on its value and usage. 

let newInference = "Zohaib";  // this is auto detect the type of variable

console.log(typeof newInference);  // this is auto detect the type of variable


// what is union
// ans: In TypeScript, a union type is a way
//  to specify that a value can be of one of
//   several types. It is denoted using the | symbol between
//    the types. Union types are useful when a variable or 
//    parameter can accept multiple types of values.
// Union types in TypeScript provide flexibility 
// by allowing variables to be of different types
//  at different times, which can be helpful in 
//  scenarios where a function or variable needs 
//  to handle multiple types of data. This helps 
//  in writing more versatile and reusable code.


let newUnion: string | number;  // this is used to i idea what is value in giving in this variable

newUnion = "Zohaib",  //this is variable is string value
newUnion = 3784            // this is number

console.log(newUnion);   //this is union variable we used multiple type include and we used



// what is type interSection
// ans:In TypeScript, an intersection type 
// is denoted by the & symbol and allows you 
// to combine multiple types into a single 
// type that has all the features of the 
// individual types. Intersection types 
// are useful when you want to create a
//  type that has properties and methods 
//  that exist in multiple types.
// Intersection types in TypeScript are 
// particularly helpful when you need to
//  combine different types to create a 
//  new type that encompasses all the features 
//  you require. This can be beneficial for 
//  creating complex types that need to satisfy
//   multiple conditions or interfaces.


type type1 ={
  name: string
}

type type2 ={
  age: number
}

type combineValue = type1 & type2;

let interSectionValue: combineValue ={
  name: "Zohaib",
  age: 20
}

console.log(interSectionValue)





// what is type alias
// ans: A type alias in TypeScript allows 
// you to create a new name for a type. 
// This can be a useful way to simplify complex 
// types or provide more descriptive names for 
// existing types. Here is an example of a type alias:


type Student = {
  name: string,
  age: number
  classSection: string
  department: string
}

let info: Student = {
  name: "Zohaib",
  age: 20,
  classSection: "A",
  department: "IT"
}

console.log(info);
console.log(info.name);
console.log(info["name"]);





// what is interface type is TS with code
// Ans: In TypeScript, an interface is a way
//  to define the shape of an object. 
// Interface merging is a powerful feature in
//  TypeScript that allows you to combine multiple 
//  interfaces into a single interface. This is 
//  especially useful for: It specifies 
//  the types of properties and methods that an 
//  object can have. Interfaces are used to enforce 
//  a certain structure and to ensure that objects 
//  adhere to a specific contract.


interface Human {
  name: string
  age: number
}
interface Human{
  ID: number
}

let newHuman: Human = {
  name: "Zohaib",
  age: 20,
  ID: 1
}

console.log(newHuman);


// Named Function
// A named function is a function that has 
// a name. It can be used anywhere in the code,
//  even before it is defined.

function nameFunction(): void{}



// Anonymous Function
// An anonymous function is a function that does 
// not have a name. It is often used as an argument
//  to another function or as a callback function.

// function():void{}


// Arrow Function
// An arrow function is a concise way to write 
// anonymous functions. It is often used for short 
// functions that return a single expression.

const ArrowFunction = (): void => {
  console.log("Arrow Function is working...");
  
};


// Explicit Return Type
// An explicit return type is a type that is explicitly 
// specified for the return value of a function.

function Explicit(): string {
  return "hello i am Explicit return function"
}


// Implicit Return Type
// An implicit return type is a type that is 
// inferred by the TypeScript compiler based on 
// the return value of the function.

function Implicit(){
  return "hello i am Implicit return function"
}


// Optional Parameters
// An optional parameter is a parameter that can be omitted when calling a function.

function OptionalParameters(name: string, age: number, gender?: string){
  return "hello i am Optional Parameters function"
}
OptionalParameters("Zohaib", 20)


// Default Parameters
// A default parameter is a parameter that has a default 
// value if it is not provided when calling a function.


function DefaultParameters(name: string = "default"){
console.log(name);

}
DefaultParameters() // this is default parameters
DefaultParameters("Zohaib") // this is not default parameters


// Rest Parameters
// Rest parameters allow a function to accept an indefinite number of arguments.


function RestParameter(...RestParameter: string[]){
       console.log(RestParameter);
}
RestParameter("Zohaib", "Ali", "Dayo")




// Importing Modules in TypeScript
// In TypeScript, modules are used to organize code into 
// reusable units. They promote better code structure and 
// maintainability by allowing you to break down your
//  application into smaller, more manageable files.


import { server } from "./Home/script";

console.log(server);




// Literal Types
// Literal types in TypeScript allow you to specify
//  exact values a variable can have. There are three 
//  primary categories of literal types:

// String Literal Types
// Numeric Literal Types
// Boolean Literal Types


// String Literal Types
// A string literal type allows a variable to be assigned 
// one of a small set of specified string values.

type Direction = "North" | "South" | "East" | "West";

let move: Direction;
move = "North"; // Valid
move = "South"; // Valid
// move = "Up";    // Error: Type '"Up"' is not assignable to type 'Direction'.

console.log(move);


// Numeric Literal Types
// A numeric literal type allows a variable to be 
// assigned one of a small set of specified numeric values.

type Dice = 1 | 2 | 3 | 4 | 5 | 6;

let roll: Dice;
roll = 1; // Valid
// roll = 7; // Error: Type '7' is not assignable to type 'Dice'.

console.log(roll);


// Boolean Literal Types
// A boolean literal type allows a variable to be assigned one 
// of the two boolean values.



type TruthValue = true | false;

let isTrue: TruthValue;
isTrue = true;  // Valid
isTrue = false; // Valid
// isTrue = "true"; // Error: Type '"true"' is not assignable to type 'TruthValue'.

console.log(isTrue);



// Summary
// Literal types in TypeScript provide a way to specify that a 
// variable can only take on one of a set of literal values. 
// This can make your code more precise and help prevent bugs 
// by ensuring variables have exactly the values you expect.