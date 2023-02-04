//반복문
for (let i = 1; i<=10; i++){
  console.log(`${i} 코드잇`);
}

for (let i = 1; i <= 100; i++){
  if(i % 2 == 0){
    console.log(`${i}`);
  }
}

function printTriangle(height){
  let message = "";
  console.log(`높이: ${height}`);
  for(i = 1; i <= height; i++){
    message += "*";
    console.log(`${message}`);
  }
}

printTriangle(3);