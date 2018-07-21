/*
Hello JS: ES6
Start Date: 13 Jun 2018
 */
// Square Grid
// for (let i = 1; i < 16; i++) {
//   let div = document.createElement('div');
//   document.getElementsByTagName('section')[0].appendChild(div);
//   // document.getElementsByTagName('section') returns an array
//   // and since has 1 <section> the index is 0
//
//   div.onclick = function() {
//     console.log('Box No.' + i);
//   };
// }
// function coldEnough(deg) {
//   let freezingTemp = 0;
//   if (freezingTemp >= deg) {
//     return deg + ' ' + ('It\'s freezing');
//   } else {
//     return deg + ' ' + ('It\'s a good');
//   }
// }
//
// console.log(coldEnough(40));
// console.log(coldEnough(-40));
//console.log('My birthday is ' + 2010);
// Janah 1st javaScript code
// let currentYear = 2018;
// let birthYear = 2010;
// let long = '125 cm';
//
// console.log(`${currentYear - birthYear} Years old`);
// console.log(`My long is ${long}`);
// function newContent() {
//   console.log("load new content");
//   document.open();
//   document.write("<h1>Content has been replaced</h1>");
//   document.close();
// }
// newContent();
// function thanksEmail(firstName, totalPrice) {
//   let shippingCost = 4.9;
//   let grandTotal = totalPrice + shippingCost;
//   console.log(
//     `Hi ${firstName}, thanks for buying from us.
//       Total Price: $${totalPrice}
//       Shipping cost: $${shippingCost}
//       Grand Total: $${grandTotal}
//     `
//   )
// }
//
// thanksEmail('John', 24.99);
// let Person = {"name":"John", "City":"New york"};
// console.log(Person.name);
//
// let MyObject = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
// console.log(MyObject);
// let fruits = ["Banana", "Orange", "pineapple"];
// let plants = ["lotus", "lily", "ivy"];
//
// let groceryItems = ["Juice", ...fruits, "Meat", ...plants, "flour"];
// console.log(groceryItems);
// Maps
// let shoppingCart = new Map();
//
// // Define empty arrays
// let fruits = [];
// let vegetables = [];
//
// // Set key, value in map shoppingCart
// shoppingCart.set(fruits, ["Banana", "Orange", "pineapple"])
//             .set(vegetables, ["Artichoke", "Asparagus", "Broccoli"]);
// let itemsFruits = shoppingCart.get(fruits);
// let itemsVegetables = shoppingCart.get(vegetables);
//
// console.log(itemsFruits, itemsVegetables);
// Sets
// let Books = new Set();
// Books.add('War and Peace')
//      .add('Oliver Twist')
//      .add('Zero to One');
//
// console.log(Books);
// console.log('How many Books? ', Books.size);
// console.log('Has Oliver Twist?', Books.has('Oliver Twist'));
//
// Books.delete('War and Peace');
// console.log(Books);
// let NUMBERsArray = [1, 2, 2, 3, 3, 3, 4, 4];
// let NUMBERSet = new Set(NUMBERsArray);
//
// console.log('Number Array Length', NUMBERsArray.length);
// console.log('Number Set Size', NUMBERSet.size);
// For-of
// for (let letter of 'JavaScript') {
//   if (letter === 'S') {
//     break;
//   }
//   console.log(letter);
// }
// let Topics = ['HTML', 'CSS', 'JavaScript', 'Node.js'];
// for (let topic of Topics) {
//   console.log(topic)
// }
//
// let routes = new Map();
// routes.set('HTML', 'files/html/')
//       .set('CSS', 'files/css/')
//       .set('JavaScript', 'files/javascript/');
//
// for (let route of routes.values()) {
//   console.log(`http://goyoom.com/${route}`);
// }
// let routes = new Map();
// routes.set('HTML', 'files/html')
//       .set('CSS', 'files/css')
//       .set('JavaScript', 'files/javascript');
// let Topics = ['HTML', 'CSS', 'JavaScript'];
// for (let topic of Topics.entries()) {
//   console.log(topic)
// }
// function bitDepth(x, y = 8) {
//   console.log(Math.pow(2, y))
// }
// bitDepth();
// let cat = {
//   meow: function(times) {
//     console.log('Meow!..'.repeat(times))
//   },
// };
//
// cat.meow(3);
// let cat = {
//   meow(times) {
//     console.log('Meow!..'.repeat(times))
//   },
// };
//
// cat.meow(1);
// studentList = students => console.log(students);
// studentList(['John', 'Sarah', 'Peter']);
// let Person = {
//   name: 'John',
//   actions: ['Biking', 'Hiking', 'Skiing'],
//   printAction() {
//     this.actions.forEach(action => {
//       let str = this.name + ' likes to ' + action;
//       console.log(str)
//     })
//   }
// };
//
// Person.printAction();
// let [EN, FR, , AR, GR] = ['English', 'French', 'Korean', 'Arabic', 'Germany'];
// console.log(EN, AR, GR);
// let {title, ingredients, price} = {
//   title: 'Hamburger Sandwich',
//   price: 7,
//   ingredients: ['Bread', 'Fries', 'Ham', 'Cheese']
// };
//
// console.log(`Sandwich: ${title}`);
// console.log(`Ingredients: ${ingredients}`);
// console.log(`Price: $${price}`);
//
// console.log({title, price});
// console.log([title, price]);
// Variables
// let foo = true;
// console.log(foo, typeof foo);
// let a = 8;
// a += 2;
// console.log(a);
// let a = 0, b = 2;
// console.log(a, b);
// let i = 0;
// console.log(i++);
// console.log(i);
// let x = 5;
//
// if (!x) {
//   console.log('x is NOT true', typeof x);
// } else {
//   console.log('x is true', typeof x);
// }
// Generators
// function* director() {
//   yield 'Three';
//   yield 'Two';
//   yield 'One';
//   yield 'Action...';
// }
//
// let action = director();
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// function* eachItem(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i]
//   }
// }
//
// let letters = eachItem(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
//
// let abc = setInterval( function() {
//   let letter = letters.next();
//   if (letter.done) {
//     clearInterval(abc);
//     console.log('Now I know my ABC\'s')
//   } else {
//     console.log(letter.value)
//   }
// }, 500);
// let timer = setInterval(function(i) {
//   if (i < 10) {
//     i++;
//     console.log(i);
//   } else {
//     clearInterval(timer);
//     console.log('done')
//   }
// }, 500);
//
// console.log(timer);
// let console.logWindow = setInterval(function(){
//   window.console.log("Hello");
//   clearInterval(console.logWindow)
//   }, 500);
// const ID = Symbol();
// const courseInfo = {
//   id: 456,
//   title: 'ECMAScript 6',
//   topics: ['typescript', 'syntax', 'functions', 'classes']
// };
//
// // Add property to object
// courseInfo[ID] = 456;
//
// console.log(courseInfo);
//
// const x = Object('No.');
// console.log(x, typeof x);
// let title = 'ES6';
//
// // Expected function
// console.log(typeof title[Symbol.iterator]);
//
// let iterateIt = title[Symbol.iterator]();
// console.log(iterateIt.next());
// console.log(iterateIt.next());
// console.log(iterateIt.next());
// console.log(iterateIt.next().done);
//
// function tableReady(arr) {
//   let nextIndex = 0;
//   return {
//     next() {
//       if (nextIndex < arr.length) {
//         return {value: arr.shift(), done: false};
//       } else {
//         return {done: true}
//       }
//     }
//   }
// }
//
// let waitingList = ['Sarah', 'Heather', 'Anna', 'Meagan'];
// let iterateList = tableReady(waitingList);
//
// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`Is table finish? ${iterateList.next().done}`);
// let fibonacci = {
//   [Symbol.iterator]() {
//     let pre = 0;
//     let cur = 1;
//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur ];
//         return {value: cur, done: false}
//       }
//     }
//   }
// };
//
// console.log(typeof fibonacci); // Expected: object
// console.log(typeof fibonacci[Symbol.iterator]); // Expected: function
//
// for (let n of fibonacci) {
//   if (n > 500) {
//     break
//   }
//   console.log(n)
// }
// Promises
// fetch('http://api.open-notify.org/astros.json')
//   .then(response => response.json())
//   .then(console.log);
// const SPACEPEOPLE = () => {
//   return new Promise((resolve, rejects) => {
//     const API = 'http://api.open-notify.org/astros.json';
//     const REQUEST = new XMLHttpRequest();
//     REQUEST.open('GET', API);
//     REQUEST.onload = () => {
//       if (REQUEST.status === 200) {
//         resolve(JSON.parse(REQUEST.response));
//       } else {
//         rejects(Error(REQUEST.statusText));
//       }
//     };
//     REQUEST.onerror = err => rejects(err);
//     REQUEST.send();
//   })
// };
//
// SPACEPEOPLE().then(
//   spaceData => console.log(spaceData),
//   err => console.error(
//     new Error('Cannot load space people')
//   )
// );
// Classes
// class toyotaVehicle {
//   constructor(model, wheels) {
//     this.model = model;
//     this.wheels = wheels;
//   }
//   description() {
//     console.log(`${this.model}, with ${this.wheels}-wheel drive!`);
//   }
// }
//
// // Create instances of class
// let camry = new toyotaVehicle('Toyota Camry', 2);
// let corolla = new toyotaVehicle('Toyota Corolla', 2);
// camry.description();
// corolla.description();
//
//
// // Class Inheritance
// class Truck extends toyotaVehicle {
//   constructor() {
//     // Get constructor form super class
//     super('Toyota Tacoma Truck', 4)
//   }
// }
//
// // Create instances of class
// let tacoma = new Truck();
// tacoma.description();
var attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(', ');
    }
};
attendance.addName = 'John';
console.log(attendance.list); // John
console.log(attendance._list); // ["John"]
