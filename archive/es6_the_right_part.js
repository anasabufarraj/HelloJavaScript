// try {
//   let z = function bar(x) {
//     return x;
//   }
// } catch (err) {
//   console.log(err)
// }
//
//
// if (foo) {
//   { var foo;
//     console.log(true, foo);
//   }
// } else if (!foo){
//   console.log(false, foo)
// }

// const arr = Object.freeze([0, 1, 2]);
// arr.push[3];

// Explicit Block
// {
//   var x = Math.PI;
//   console.log(x);
// }
//
// console.log(x);

// function foo(y) {
//   y = y || 42;
//   console.log(y)
//
// }
// foo();

// function requireId() {
//   throw 'Parameter Id required!'
// }
// function foo(id = requireId()) { // throws a user-defined exception if id not defined
//   console.log(id);
//   return id
// }
// foo();

// function foo(...args) {
//   bar(42, ...args);
// }
//
// let foo;
// let bar = foo === undefined ? 0 : 1;
// console.log(bar);

// let [EN, FR, AR, ...args] = ['English', 'French', 'Arabic', '3', '4', '5', '6'];
//
// console.log(EN, FR, AR, args); // expected: English French Arabic (4) [3, 4, 5, 6]
// console.log(EN, FR, AR, ...args); // expected: English French Arabic 3 4 5 6

// let x = 10,
//     y = 12;

// swapping using deconstruction assignment pattern
// [x, y] = [y, x];
//
// console.log(x, y);
//
// let c = 4 || 3;
// console.log(c);

// function destructObj() {
//   return {a: 1, b: 2, c: 3}
// }
//
// let {
//   e: a,
//   f: b,
//   g: c
// } = destructObj();
//
// console.log(a, b, c);

// function foo([a, b, c] = [0, 1, 2]) {
//   console.log(a, b, c)
// }
//
// foo([1, 2, 3, 4]);

// let name = 1;
//
// let obj = {
//   name: 'name',
// };
//
// console.log(obj.name);

// let str = "that's\ncorrect";
// console.log(str);

// function foo(x) {
//   return x
// }
// let message = foo`Hi thanks for buying from us.
//     Total Price: $
//     Shipping cost: $
//     Grand Total: $
//   `;
// console.log(
//   message
// );

// let name = 'Alfred';
// let age = 47;
//
// function greet(){
//   name[0]
// }
// greet`I'm ${name}. I'm ${age} years old.`;

// let x = Symbol('UniqueValue');

// var arr = [1, 2, 3];
// var str = 'Hello';
//
// for (let voo in arr) {
//   console.log(voo)
// }
// console.log(v)

// function *foo() {
//   console.log('Hello');
//   yield;
//   console.log('World');
// }
//
// foo().next();

// Number.prototype[Symbol.iterator] = function *() {
//   for(let i=0; i <= this; i++) {
//     yield i;
//   }
// };
//
// console.log([...8]);

// let age = prompt('Tell me your age');
// console.log(age);

// let a = 21;
// let b = a += 10;
// console.log(b);

// var a = "42";
// var b = Number(a);
//
// console.log(a);
// console.log(b);

// var a = "99.99";
// var b = 99.99;
// if (a == b) {
//   console.log(true)
// }
//
// var x = /* literal value */ 42;
// console.log(x);






















