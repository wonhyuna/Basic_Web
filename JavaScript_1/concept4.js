console.log(typeof 101);
console.log(typeof 1.0);
console.log(typeof 'Hello');
console.log(typeof "Hello");
console.log(typeof `Hello`);

let name = 'Hello';
function sayHello(){
  console.log('Hello');
};

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello' + 'hello'); //연산 순서로 인해 string + hello가 됨
console.log(typeof 8 - 3); //연산 순서로 인해 NaN 결과 나옴 (number - 3)

console.log(typeof ('Hello' + 'hello'));
console.log(typeof (8 - 3));
