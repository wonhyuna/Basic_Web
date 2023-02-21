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

//점 표기법
console.log(codeit.name);
//대괄호 표기법
console.log(codeit['worst Course']);

console.log(codeit.bestCourse['title']);
console.log(codeit.bestCourse['teacher']);