let today = new Date(2112, 8, 24); //2112년 8월 24일
let jaeSang = new Date(2109, 7, 1); //2109년 7월 1일

function workDayCalc(startDate){
  let timeDiff = today - jaeSang;
  let workday = timeDiff / 1000 / 60 / 60 / 24 + 1;

  console.log(`오늘은 입사한 지 ${workday}일 째 되는 날입니다.`);
}

console.log(jaeSang)
workDayCalc(jaeSang);
