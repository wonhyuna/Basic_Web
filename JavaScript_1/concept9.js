function participant(name){
  console.log(`${name}(이)가 대화에 참여했습니다.`);
}

participant('동수');
participant('윤하');

function multi(num1, num2){
  console.log(`${num1} * ${num2} = ` + num1 * num2);
}

multi(3, 4);
multi(3, 2);

function square(x){
  console.log("return 전");
  return x * x;
  console.log("return 후"); //dead code 실행 x
}

square(3);
console.log(square(3)); //return 값도 함께 출력됨