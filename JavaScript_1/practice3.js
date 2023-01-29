//함수 선언 + 파라미터
function greetings(sentence) {
  console.log('Hi');
    console.log('안녕');
    console.log('こんにちは');
    console.log('你好');
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
    console.log(sentence);
}

//함수 호출
greetings('Hola');


//함수 선언 + 파라미터
function welcome(name){
  console.log('안녕하세요 ' + name + '님!');
}

//함수 호출
welcome('유재석');
welcome('강호동');
welcome('이경규');

//함수 선언 + 파라미터
function printSquare(x){
  console.log(x * x);
}

printSquare(2);
printSquare(5);
printSquare(6);

//함수 선언 + 파라미터
function teraToGiga(x){
  console.log(x + 'TB는');
  console.log(1024*x + 'GB 입니다.');
}

function teraToMega(y){
  console.log(y + 'TB는');
  console.log(1024*1024*y + 'MB 입니다.')
}

teraToGiga(2);
teraToMega(2);