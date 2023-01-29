//함수 선언 + 여러 개의 파라미터
function printSum(num1, num2){
  console.log(num1 + num2);
}

//함수 호출
printSum(10, 5);
printSum(123, 4);
printSum(56, 7890);

//함수 선언 + 여러 개의 파라미터
function introduce(name, birth, nationality, job){
  console.log('안녕하세요 반갑습니다');
  console.log('제 이름은 ' + name + '입니다.');
  console.log('생년월일은 '+ birth +' 이고');
  console.log('국적은 ' + nationality + ' 입니다.');
  console.log('직업은 ' + job + ' 입니다.');
  console.log('잘 부탁드립니다.');
}

//함수 호출
introduce('유재석', '72.08.14', '한국', '개그맨');


//함수 선언 + 여러 개의 파라미터
function bmiCalculator(name, weight, tall){
  bmi = weight / (tall * tall / 10000);
  console.log(name + "님의 체질량지수는 " + bmi + "입니다.");
};

//함수 호출
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);