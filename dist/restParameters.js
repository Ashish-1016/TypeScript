"use strict";
//Rest Parameters:
//Appear after all the other parameters as an array [...args]
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
//Rest Arguements:
// Using the spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
//TypeScript does not assume that arrays are immutable. This can lead to some surprising behavior:
// Inferred as 2-length tuple
const args = [8, 5];
// OK
const angle = Math.atan2(...args);
//Object Destructuring:
// The type annotation for the object goes after the destructuring syntax:
function sum({ a, b, c }) {
    console.log(a + b + c);
}
function sum2({ a, b, c }) {
    console.log(a + b + c);
}
