//상수
const PI = 3.14;
let radius = 0; //기본값 할당

function area(){
  return PI * radius * radius;
}

function print(){
  console.log(`반지름: ${radius}, 원 넓이: ${area()}`);
}

radius = 4;
console.log(print()); //함수에 할당된 undefined