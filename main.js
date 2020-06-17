"use strict";
// my first TypeScript program
// compile program on terminal:
//     tsc main.ts
// run code using Node:
//     node main.js
exports.__esModule = true;
var message = 'Welcome back!';
console.log(message);
var isBeginner = true;
// isBeginner = 44; // gives an error since 44 is not of the same type (bool)
var total = 0;
var name = 'Sunny';
var sentence = "My name is " + name + ".";
console.log(sentence);
// arrays
var list1 = [1, 2, 3, 4, 5]; // first way to declare an array
var list2 = [1, 2, 3, 4, 5]; // second way to declare an array
// arrays with mixed values - use tuples
var list3 = ['Sunny', 33];
// any type
var randomType = 10;
randomType = 'Sunny';
