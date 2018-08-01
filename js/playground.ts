// © Copyright 2018, Anas Abu Farraj.
// TypeScript Playground
// 29 Jul 2018

// function typeOfNaN(value: any) {
//   if (!isNaN(value)) {
//     return 'Number'
//   } else {
//     return 'Not a Number'
//   }
// }
//
// console.log(typeOfNaN(42));     // 'Number'
// console.log(typeOfNaN('42'));   // 'Number'
// console.log(typeOfNaN('John')); // 'Not a Number'
//
// console.log((Math.random()* 100).toPrecision(5));

//// Date Object
// specific date and time
// const date = new Date(1979, 4, 10, 10, 30, 0, 0);
// console.log(date);
// console.log(date.getFullYear());

// const date = new Date();
// console.log(date.getFullYear());        // year, using local time.
// console.log(date.getMonth());           // month, using local time.
// console.log(date.getDate());            // day-of-the-month, using local time.
// console.log(date.getDay());             // day of the week, using local time.
// console.log(date.getTime());            // time value in milliseconds.
// console.log(date.getHours());           // minutes of a Date object, using local time.
// console.log(date.getMinutes());         // minutes of a Date object, using local time.
// console.log(date.getSeconds());         // seconds of a Date object, using local time.
// console.log(date.getMilliseconds());    // milliseconds of a Date, using local time.
// console.log(date.getUTCFullYear());     // year, using UTC time.
// console.log(date.getUTCMonth());        // month, using UTC time.
// console.log(date.getUTCDate());         // day-of-the-month, using UTC time.
// console.log(date.getUTCDay());          // day of the week, using UTC time.
// console.log(date.getUTCHours());        // time value in milliseconds.
// console.log(date.getUTCMinutes());      // minutes of a Date object, using UTC time.
// console.log(date.getUTCSeconds());      // seconds of a Date object, using UTC time.
// console.log(date.getUTCMilliseconds()); // milliseconds of a Date object using UTC.

// date.setFullYear(1979);
// console.log(date.getFullYear());

// let date1 = new Date(2018, 4);
// let date2 = new Date(2018, 4);
// let date3 = new Date(1979, 4);
//
// console.log(date1 < date3); // false
// console.log(date1 > date3); // true
// console.log(date1 == date2); // false: wrong way of comparison
// console.log(date1.getTime() == date2.getTime()); // true: right way of comparison

//// assertions function
// function assert(condition: boolean, message: string): void {
//   if (!condition) {
//     throw message || "Assertion failed";
//   }
// }

// function assert(condition: boolean, message: string): void {
//   if (!condition) {
//     message = message || "Assertion failed";
//     if (typeof Error !== "undefined") {
//       throw new Error(message);
//     }
//     throw message; // Fallback
//   }
// }
//
// assert(false, '...This need fixing');

//
// try {
//   eval('alert("Hello world)"'); // wrong code inside string
// }
// catch(error) {
//   console.assert(error);
//   // expected output: SyntaxError: missing ) after argument list
//   // error messages will vary depending on browser
// }

// let err = new Error('...This need fixing');
// console.assert(err);

// function findEvenNum(ceiling: number) {
//   for (let num = 1; num <= ceiling; num++) {
//     console.log(num);
//
//     // assert an error with message if even number found
//     // if condition is false, assertion happen
//     // (num % 2 == 1) is false when num is even
//     console.assert(num % 2 == 1, `Number ${num} is even`);
//   }
// }
//
// findEvenNum(10);

// console.assert(false, 'Hello');