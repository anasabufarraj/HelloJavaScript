// JavaScript Playground
// 29 Jun 2018
// Anas Abu Farraj

// const obj = {
//   a: 'Hello world',
//   b: 42,
// };
//
// let b = 'a';
//
// console.log(obj[b]); // Hello world
// console.log(obj['b']); // 42

//// --- Using Arrays as Objects
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

// function foo() {
//   return 42
// }
//
// foo.a = 'Hello';
// foo.b = 'world';
//
// console.log(foo.a, foo.b);

//// --- functions
// function foo() {
//   return 42
// }
//
// console.log(typeof foo()); // number
// console.log(typeof foo); // function
//
// // add 'function object method' to function
// foo.colorDepth = function(bit) {
//   return 2 ** bit
// };
//
// // add 'function object property' to function
// foo.greeting = 'Welcome';
//
// console.log(foo.colorDepth(8)); // 256
// console.log(typeof foo.colorDepth()); // number
//
// console.log(foo.greeting); // 'Welcome'
// console.log(typeof foo.greeting); // string

//// --- coercion
// let a = "42";
// let b = a * 2; // implicit coercion

//// --- Truthy and Falsy
// let a = {'a': 5};
// let b = {'a': 5};
//
// console.log(Boolean(a == b));

// function arrayCompare(a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }
//   for (let i = 0, len = a.length; i < len; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(arrayCompare(a, b));

// let a = 41;
// let b = '42';
// let c = '43';
//
// console.log(a < b < c);

// 'use strict';
// function foo() {
//   a = 1;
// }
// foo();
// console.log(a);

// let a = 42;
//
// switch (a) {
//   case 42:
//   case 0:
//     console.log('a is 0');
//     break;
//   default:
//     console.log('a is', a)
// }

// "use strict";
// function foo() {
//   // this code is strict mode
//
//   function bar() {
//     // this code is strict mode
//
//   }
// }
// // this code is strict mode
//
// function foo() {
//   "use strict";  // turn on strict mode
//   a = 1;         // `var` missing, ReferenceError
// }