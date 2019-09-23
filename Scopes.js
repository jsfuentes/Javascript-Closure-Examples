//once upon a time in a scope
let x = 3;

function addNumbers(y) {
  console.log(x + y);
}
addNumbers(2); //5
console.log(x); //3
console.log(y); //Error: y is not defined
