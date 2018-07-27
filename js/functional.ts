// © Copyright 2018, Anas Abu Farraj.
// TypeFunctional Programming
// 26 July 2018

// import {output} from "./console";

// TODO: remove this when fixing import ERROR
const line = console.log;
function output(value: any): void {
  console.log(value);
}
// ------------------------------------------

line('Hellos');

function foo(admin: any) {
  if (admin === undefined) {
    console.log(admin);
  }
}