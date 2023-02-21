let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

fruits.splice(1, 1, '사과', '청포도');
fruits.shift();
ages.pop();
ages.splice(2, 2, 26, 28);
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);
for (let i = 0; i < numbers.length; i++){
  if (numbers[i] % 2 == 1){
    numbers.splice(i, 1);
    i--;
  }
}

// 테스트 코드
console.log(fruits);
console.log(ages);
console.log(numbers);