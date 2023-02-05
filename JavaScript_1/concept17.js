//break
let i = 1;

while(i <= 10){
  console.log(i);
  if(i === 7){
    break;
  }
  i++;
}

for(let i = 1; i <= 10; i++){
  console.log(i);
  if (i === 7){
    break;
  }
}

//continue
for(let i = 1; i <= 10; i++){
  if(i % 2 == 0){
    continue;
  }
  console.log(i);
}

let j = 1;
while(j <= 10){
  if(j % 2 === 0){
    j++;
    continue; //제일 위 while문으로 감
  }
  console.log(j);
  j++;
}

