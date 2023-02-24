let millionaire = 1000000000;
let myNumber = 1e9;

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

//숫자표기법
console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === - 0.000091);

//16진법
let hex1 = 0xff; //255
let hex2 = 0xFF; //255

//8진법
let octal = 0o377; // 255

//2진법
let binary = 0b11111111; //255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

//소수점
let num = 0.3591;
console.log(num.toFixed(7));
console.log(typeof num.toFixed(7));

console.log(Number(num.toFixed(7)));
console.log(typeof Number(num.toFixed(7)));

console.log(+num.toFixed(2));
console.log(typeof +num.toFixed(2));

//숫자 -> 2, 8, 16진법 변환
let number = 255;

console.log(number.toString(2));
console.log(255..toString(2));
console.log((255).toString(2));

console.log(number.toString(8));
console.log(number.toString(16));