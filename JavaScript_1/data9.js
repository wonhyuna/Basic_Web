//Date 객체
let myDate1 = new Date('2017-05-18');
let myDate2 = new Date('2017-05-18T19:11:16');
let myDate3 = new Date(2017, 4, 18, 19, 11, 16); //month는 0부터 시작, 4 -> May
let today = new Date(); //오늘

let timeDiff = today.getTime() - myDate3.getTime();

console.log(myDate1);
console.log(myDate2);
console.log(myDate3);

console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

//Date는 일자, Day는 요일(0일요일 ~ 6토요일)