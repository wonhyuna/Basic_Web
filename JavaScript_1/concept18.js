//구구단
let i = 1;
while(i <= 9){
  let j = 1;
  while(j <= 9){
    console.log(`${i} * ${j} = ${i*j}`);
    j++;
  }
  i++;
}

//피보나치
let current = 1;
let previous = 0;

for(let i = 1; i <= 50; i++){
  console.log(current);
  let temp = previous;
  previous = current;
  current = current + temp;
}
