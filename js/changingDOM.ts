// JavaScript Changing DOM
// 5 Jul 2018
// Anas Abu Farraj
// @anasabufarraj
console.info('Start something!');

// function moveDown() {
//   window.scroll({
//     top: 10000,
//     behavior: 'smooth'
//   });
// }
// function moveUp() {
//   window.scroll({
//     top: 0,
//     behavior: 'smooth'
//   });
// }

// let state = navigator.onLine;
//
// if (state) {
//   console.log()
// } else {
//   console.log('offline')
// }
//
// (function onlineStatus() {
//   if (window.navigator.onLine) {
//     console.log('Browser online');
//   } else
//     console.log('Browser offline');
// }());

// const button = window.document.querySelector('#myButton');
//
// button.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log('Clicked')
// }, false);

class CoursesInfo {
  title: String;
  instructor: String;
  level: Number;
  views: any;

  constructor(title, instructor, level, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.views = views;
  }

  updateView() {
    return `Views: ${++this.views}`
  }

}

// Courses List
let course = [
  new CoursesInfo('Java Debugging', 'Morton  Bon', 2, 122),
  new CoursesInfo('Java Essentials', 'John Peterson', 1, 454),
  new CoursesInfo('Java Syntax', 'Susan Schneider', 3, 568),
  new CoursesInfo('Java Functions', 'Lee Mints', 3, 7894)
];

console.log(course[0]);
console.log(course[0].views);
course[0].updateView();
console.log(course[0].views);
console.log(course[1]['views']);