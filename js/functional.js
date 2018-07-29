// © Copyright 2018, Anas Abu Farraj.
// TypeFunctional Programming
// 26 July 2018

import {output} from "./console";

// TODO: remove this when fixing import ERROR
// const line = console.log;
function output(value: any): void {
  console.log(value);
}
// ------------------------------------------

// const obj = {0: 'John', 1: 'Peter', 2: 'Dolly'};
//
// console.log(obj[0]); // John
// console.log(obj[1]); // Peter
// console.log(obj[2]); // Dolly
//
// const arr = ['John', 'Peter', 'Dolly'];
//
// console.log(arr[0]); // John
// console.log(arr[1]); // Peter
// console.log(arr[2]); // Dolly

/// --- First-class functions
function foo() {
  return 42
};

line(foo());

let a = foo();
console.log(a);