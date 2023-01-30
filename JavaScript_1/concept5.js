//형 변환
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

//숫자 -> 문자
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('');

//불린 -> 숫자
let y = true;
console.log(y);
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));

console.log('');

//불린으로 형변환 시, '', 0, NaN -> false / 나머지는 true

//자동 형변환

//산술 연산
console.log(4 + '2');
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two'); // NaN은 어떤 연산을 해도 NaN이 나옴

//관계 비교 연산
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);

//같음 비교 연산
console.log(1 === '1'); //일치 (형변환 X)
console.log(1 === true);
console.log(1 == '1'); //동등 (형변환 O)
console.log(1 == true);