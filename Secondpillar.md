Scope means visibility. variable and functions.
everything inside your code will be used in one of the following 2 ways.
    1. either it will be getting some values assigned to it.
    2. or some value will be retrived from it.

type of scope: 
  global, function and block. 
  Block scope: The scope created with a pair of curly braces 

A function creates a scope.
var create a function scope.

Blocks only scope let and const declarations, but not var declarations.
{
  var x = 1;
}
console.log(x); // 1 no error

{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined


Var:
    The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

var x = 1;
if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2

Let:
    The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
    let give u blocked scope

let x = 1; //this x is differnt from below below scope due to different memory allocation.
if (x === 1) {
  let x = 2; this x is belong this block have differnt value with differnt memory allocation.

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1

---------------------------------------
function fun(){
  console.log(y); it is accessible here
  var y=10; not accessible outside

}
console.log(y); // y is not defined 
// The var statement declares function-scoped and above var y=10 is under function scoped.

function gun(){
  console.log(y)
  var y=10;
}
gun();
// o/p-- undefined
function gun(){
  console.log(y) // not accessible here
  let y=10;
}
gun();
if you defined let y=10; then u get error cannot access 'y' before initialization.

Note: var create the functioned scope and let create  a block scope.
var is accessiable inside the function any where but let is not accessible as per code.

-- redeclaration is not allowed with let,but it is allowed with var

