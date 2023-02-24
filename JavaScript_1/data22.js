//팩토리얼
function factorial(n){
  let result = 1;
  if(n == 0){
    result = 1;
  }else{
    while(n !== 1){
      result *= n;
      n--;
    }
  }
  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));

//거스름돈
function calculateChange(payment, cost) {
  let change = payment - cost;
  let oman = Math.floor(change / 50000); 
  let man = Math.floor((change % 50000) / 10000);
  let ocheon = Math.floor(((change % 50000) % 10000) / 5000);
  let cheon = Math.floor((((change % 50000) % 10000) % 5000) / 1000);
  console.log(`50000원 지폐: ${oman}장`);
  console.log(`10000원 지폐: ${man}장`);
  console.log(`5000원 지폐: ${ocheon}장`);
  console.log(`1000원 지폐: ${cheon}장`);
}

// 테스트 코드
calculateChange(100000, 33000); //67000
console.log('');
calculateChange(500000, 378000);  //122000 

//팰린드롬
function isPalindrome(word) {
  let len = word.length;  //7(racecar)  or  6(123 321)
  let i = 0;
  while(i !== Math.floor(len / 2)){
    if (word[i] !== word[len - 1 - i]){
      return false;
    }
    i++;
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));