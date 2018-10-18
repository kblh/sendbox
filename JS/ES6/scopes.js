/**
 * SCOPES
 */

// global scope // local scope (in function)
var a = 2;
console.log("global scope: " + a);

function localScope() {
  var b = 30;
  console.log("local scope: " + b);
}
// console.log("local from global scope: " + b); - ! not defined


// block scope (eg if () {...})

if (1 == 1) {
  var c = 30;
}

console.log("block var from global scope: " + c);

// var => function scope variables
// ES6 (ES2015): let, const => block-scoped variables

if (true) {
  let d = 30;
  const EXAMPLE = 40;
}
// console.log("block from global scope: " + d);  - not defined
// console.log("block from global scope: " + EXAMPLE);  - not defined


const AAA = 40;
console.log("const AAA: " + AAA);

// const AAA = 400;
// console.log("const AAA: " + AAA); - 'AAA' has already been declared


var myName = 'John';
let myAge = 22;
console.log(window.myName);
console.log(window.myAge); // undefined

