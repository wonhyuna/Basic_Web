//기본형과 참조형
//기본형 (Number, String, Boolean, Null, Undefined)
let x = [1, 2, 3];
let y = x;

console.log(x);
console.log(y);
y[2] = 4;
console.log(x);
console.log(y);

//참조형 (Object)
let m = {name: 'Codeit'};
let n = m;

console.log(m);
console.log(n);
n.birth = 2017;

//참조형 
let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1); //1, 2, 3
console.log(numbers2); //1, 2, 3, 4


let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

//방법1
//let course2 = Object.assign({}, course1);

//방법2
let course2 = {};
for(let key in course1){
  course2[key] = course1[key];
}

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);