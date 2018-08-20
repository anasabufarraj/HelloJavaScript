// (c) Copyright 2018, Anas Abu Farraj.
// TypeFunctional Programming
// 26 July 2018

// import {output} from "./console";

// TODO: remove this when fixing import ERROR
// const line = console.log;
// function output(value: any): void {
//   console.log(value);
// }
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
// function foo() {
//   return 42
// }
//
// line(foo());
//
// let a = foo();
// console.log(a);

// function foo() {
//   console.log('level a');
//   return function() {
//     console.log('level b');
//     return function() {
//       console.log('level c')
//     }
//   }
// }
//
// foo()()();

// function foo(name) {
//   return {
//     name: name,
//     age: 34,
//   }
// }
//
// let a = foo('John');
// console.log(a);

// function foo(a, b, c) {
//   return [
//     a,
//     b,
//     c
//   ]
// }
//
// let a = foo(1, 2, 3);
// let b = foo('John', 'Peter', 'Sarah');
// console.log(a);
// console.log(b);

// --- Callback
// console.log('Starts');
//
// setTimeout(function() {
//   console.log('Executed 1');
//   setTimeout(function() {
//     console.log('Executed 2');
//     setTimeout(function() {
//       console.log('Executed 3')
//     }, 2000);
//   }, 2000);
// }, 2000);
//
// console.log('Finished');

/// --- Recursion
// function counter(i) {
//   console.log(i);
//   if (i > 0) {
//     counter(i - 1)
//   }
// }
//
// counter(10);
