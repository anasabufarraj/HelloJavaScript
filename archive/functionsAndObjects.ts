// JS Functions
// 29 Jun 2018
// Anas Abu Farraj
// @anasabufarraj

// function fullName(firstName, lastName) {
//     let name = `${firstName} ${lastName}`;
//     console.log(name);
//     return  name
// }
// fullName('John', 'Peterson');
// console.error('Error has been logged.');
//
// (function () {
//     console.log(`Hello, Immediate Invoked Expression" function.`);
// }());
//
// function multiply(a, b) {
//     let result = a * b;
//     console.log(result);
//     return result
// }
//
// let c: number = multiply(2, 3);
// console.log(c);

// function findMax(a, b) {
//     return Math.max(a, b)
// }
//
// console.log('Max numbers:', findMax(3, 13));

// console.group('Information');
// console.warn('Unused variable multiply');
// console.trace();
// console.groupEnd();

// function myFunction(firName, secName){
//     if (secName === undefined){
//         secName = "Superman";
//     }
//     console.log("Hello " + firName + " " + secName);
//     return "done";
// }
// myFunction ("Anas");

// let multiply = ( function(a, b) {
//     let result = a * b;
//     console.log(result);
//     return result
// }(2, 16));
//
// (function letTest() {
//     var x = 1;
//     if (true) {
//         let x = 2;  // different variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 1
// })();

// Objects
// let course = Object();
// course.title =  'JavaScript';
// course.instructor =  'Morton';
// course.level = 'Beginner';
// course.views =  0;
// course.updateViews = function() {
//     return ++course.views;
// };
//

// let course = {
//     title: 'JavaScript',
//     instructor: 'Morton',
//     level:'Beginner',
//     views: 0,
//     updateViews: function() {
//         return ++course.views;
//     }
// };
// console.log(`Views: ${course.views}`); // Views: 0
// course.updateViews();
// console.log(`Views: ${course.views}`); // Views: 1


// function Course(title, instructor, level, views){
//     this.title = title;
//     this.instructor = instructor;
//     this.level = level;
//     this.views = views;
//     this.updateViews = function() {
//         return ++this.views
//     };
// }
//
// let Course01 = new Course('JavaScript Debugging', 'Morton', 1, 3);
// console.log(Course01);

// class CoursesInfo {
//     title: String;
//     instructor: String;
//     level: Number;
//     views: any;
//     constructor(title, instructor, level, views) {
//         this.title = title;
//         this.instructor = instructor;
//         this.level = level;
//         this.views = views;
//     }
//     updateView() {
//         return `Views: ${++this.views}`
//     }
// }
//
// let course = new CoursesInfo('Java Debugging', 'Morton  Bon', 2, 122);
// console.log(course['title']);

// let course = [
//     new CoursesInfo('Java Debugging', 'Morton  Bon', 2, 122),
//     new CoursesInfo('Java Essentials', 'John Peterson', 1, 454),
//     new CoursesInfo('Java Syntax', 'Susan Schneider', 3, 568),
//     new CoursesInfo('Java Functions', 'Lee Mints', 3, 7894)
// ];
// console.log(course[0]);
// console.log(course[0].level);
// course[0].updateView();
// console.log(course[0].views);

// function giveMeEm(pixels: any) {
//   let baseValue = 16;
//   return pixels/baseValue;
// }
//
// let smallSize = giveMeEm(12);
// let mediumSize = giveMeEm(18);
// let largeSize = giveMeEm(24);
//
// console.log('Small size: ', smallSize, 'px');
// console.log('Medium size: ', mediumSize, 'px');













