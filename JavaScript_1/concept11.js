//변수의 scope
let x = 3;
function myFunction(){
  let x = 5;
  console.log(x);
}

myFunction();
console.log(x);