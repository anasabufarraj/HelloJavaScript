// (c) Copyright 2018, Anas Abu Farraj.
// JavaScript Playground
// 29 Jun 2018

var a = NaN,
  b = '34',
  c = 42;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // true -- oops!
console.log(isNaN(c)); // false

console.log(Number.isNaN(a)); // true
console.log(Number.isNaN(b)); // false -- fixed!
console.log(Number.isNaN(c)); // false

const str = 'hello! world';

console.log(str.padStart(14)); // "  hello!"
console.log(str.padStart(14, '.')); // "..hello!"

console.log(str.padEnd(14)); // "hello!  "
console.log(str.padEnd(14, '.')); // "hello!.."
