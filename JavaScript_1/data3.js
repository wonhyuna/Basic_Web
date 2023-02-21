//객체
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  'worst Course': null,
  bestCourse: {
    title: '자바스크립트',
    language: 'JavaScript'
  }
};

//변경
console.log(codeit.name);
codeit.name = 'codeit';
console.log(codeit.name);

//추가
console.log(codeit.ceo);
codeit.ceo = '강영훈';
console.log(codeit.ceo);

//삭제
console.log(codeit['worst Course']);
delete codeit['worst Course'];
console.log(codeit['worst Course']);

//true or false
console.log(codeit.name !== undefined);
console.log('name' in codeit); //프로퍼티 확인


if('name' in codeit){
  console.log(`name 값은 ${codeit.name}입니다.`);
}else{
  console.log(`name 프로퍼티는 존재하지 않습니다.`);
}