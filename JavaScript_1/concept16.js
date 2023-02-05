//while문
let i = 30;
while (i % 7 !== 0){
  i++;
}

console.log(i)

const N = 180;
let n = 1;
let count = 0;
while(n <= N){
  if(N % n == 0){
    console.log(n);
    count++;
  }
  n++;
}

console.log(count)