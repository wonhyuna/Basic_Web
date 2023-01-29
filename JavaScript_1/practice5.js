//return 포함 함수
function getTwo(){
  return 2;
}

console.log(getTwo());


//return 포함 함수
function getTwice(number){
  return number * 2;
}

console.log(getTwice(5));

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);

//return 포함 함수
let money = 3650000;
let saveTerm = 1;
let interestRate = 4;

function interestCalculator(amount, term, rate){
  return amount * term * rate / 100;
}

let interest = interestCalculator(money, saveTerm, interestRate);
let totalMoney = money + interest;

console.log("받는 값: " + totalMoney);
