// © Copyright 2018, Anas Abu Farraj.
// TypeScript Training Project
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
// function calculateLengthArray(x: string, y: string) {
//   return x.length + y.length
// }
//
// let message = calculateLengthArray('Hello', 'world!');
// console.log(message);

/// --- enum
// enum Color {
//   Red,
//   Green,
//   Blue
// }
// let r_name: string = Color[0];
// let r_index: Color = Color.Red;
// console.log(r_name, r_index); // Red 0

/// --- Union Type, and Type Guard Syntax
// Adding overload signature compatible with function implementation
// function power(any: number): number
// function power(message: string): string
// function power(_any: any): any {
//   // in case of 'string or 'number' used
//   return typeof _any !== "number"
//     ? console.log('Please use a number')
//     : console.log(_any ** 8)
// }
//
// power(Math.random());
// power('Hello');

// let tuple: [string, number, number] = ['Name', 229, 8];
// console.log(tuple[0], tuple[1]);

// function power(foo: number | string): void {
//   // adding type guard in case of 'string or 'number' used
//   return typeof foo !== "number"
//     ? console.log('Please use a number')
//     : console.log(foo ** 8)
// }

/// --- Custom Types
// interface ToDo {
//   name: string;
//   completed?: boolean // optional
// }
//
// interface ItoDoService {
//   add(todo: ToDo): ToDo
//   delete(todoId: number): void;
//   getAll(): ToDo[];
//   getById(todoId: number): ToDo
// }
//
// let todo: ToDo = {
//   name: 'Pick up peter',
// };

// TODO: I really like to do.
// FIXME: fix the current type.

/// --- Generics
function returnAnything<T>(any: T): T {
  console.log(any);
  return any
}

returnAnything('Hello');
returnAnything(65);
returnAnything(true);
returnAnything(Math.pow(2, 8));

function clone<T>(any: T): T {
  let serialized = JSON.stringify(any);
  return JSON.parse(serialized);
}

let log = clone(
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "noImplicitAny": true,
      "removeComments": true,
      "preserveConstEnums": true,
      "sourceMap": false
    },
    "exclude": [
      "node_modules"
    ]
  }
);

console.log(log);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list1, list2);

/// --- Date type
let dateStamp: Date = new Date(Date.now());
console.log(dateStamp);

/// --- Namespaces
// namespace ToDoApp.Model {
//   export interface ToDo {
//     id: number;
//     name: string;
//     state: toDoState;
//   }
// }
//
// namespace ToDoApp.Model {
//   export enum ToDoState {
//     NEw = 1,
//     Active,
//     Completed,
//     Delete
//   }
// }
//
// namespace DataAccess {
//
//   import ToDo = ToDoApp.Model.ToDo;
//
//   interface ToDoService {
//     add(todo: ToDo): ToDo;
//     delete(toDoId: number): void;
//     getAll(): ToDo[];
//     getById(toDoId: number): ToDo;
//   }
// }