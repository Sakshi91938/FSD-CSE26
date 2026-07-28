// var a = 10;
// var a = 20;
// console.log("a=",a)
// error 

// let a = 10;
// let a = 20;
// console.log("a=",a)

// let a = 10;
// a = 20;
// console.log("a=",a)

//error because b is constant
let a = 10;
a = 20;
const b=30;
b=a++;
console.log("a=",a)
console.log("b=",b)