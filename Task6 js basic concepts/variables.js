// Variables - To declare a data and also some memory allocation
// Types - Var, let, const

//Var - you can redeclare and reassign
var val1="Nandhini";
var val2=25; 
console.log(val1) // Nandhini

//let - you can't redeclare but you can reassign 
let num=10;
let num=20;
console.log(num) // Syntaxerror "num" has already been declared

num=20;
console.log(num) // 20


//const - you can't redeclare and reassign 
const username="Nandhini";
const username="Rathinam";
console.log(username) // Syntaxerror "username" has already been declared

const username="Nandhini";
console.log(username) // Nandhini