//for of 반복문
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24']
for (let i = 0; i < influencer.length; i++){
  console.log(influencer[i]);
}

for (let element of influencer){
  console.log(element);
}

for (let index in influencer){ //배열의 경우 index가 for in에서 사용됨
  console.log(influencer[index]);
}

//투표 결과
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

for (let name of votes){
  if (name in voteCounter){
    voteCounter[name] += 1;
  }else{
    voteCounter[name] = 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);