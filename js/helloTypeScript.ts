// TypeScript Training Project
// Anas Abu Farraj
// 21 July 2018

// let animal = {
//   name: 'Fido',
//   species: 'Dog',
//   age: 1,
//   speak: function speak(message: string): string {
//     return message;
//   }
// };
//
// console.log(animal.speak('Woof!'));
// console.log(animal.age);

/// ---
// function calculateAge(): number {
//   let now = new Date();
//   let userYear: any = prompt('Your year of born?');
//   return now.getFullYear() - userYear
// }
//
// let age = calculateAge();
// console.log(`You're ${age} years old`);

/// ---
function calculateLengthArray(x: string, y: string) {
  return x.length + y.length
}

let message = calculateLengthArray('Hello', 'world!');
console.log(message);