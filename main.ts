// my first TypeScript program
// compile program on terminal:
//     tsc main.ts
// run code using Node:
//     node main.js

// this treats this file as a module otherwise it is treated
// as a script which shares the global scope with any other
// scripts and therefore causing errors (duplicate variable
// names (erase export{} to test)
export {}


let message = 'Welcome back!';
console.log(message);

let isBeginner: boolean = true;
// isBeginner = 44; // gives an error since 44 is not of the same type (bool)
let total: number = 0;
let name: string = 'Sunny';
let sentence: string = `My name is ${name}.`;
console.log(sentence);

// arrays
let list1: number[] = [1,2,3,4,5];          // first way to declare an array
let list2: Array<number> = [1,2,3,4,5];    // second way to declare an array

// arrays with mixed values - use tuples
let list3: [string, number] = ['Sunny', 33];


// any type
let randomType: any = 10;
randomType = 'Sunny';



