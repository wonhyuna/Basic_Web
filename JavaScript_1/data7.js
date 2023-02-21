//for in
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

for (let key in codeit){
  console.log(key);
  console.log(codeit[key]);
}