let members = ['가나', '다라', '마바', '사아', '자차', '카타', '파하'];


console.log(members);

//splice(startIndex, deleteCount, item)
members.splice(1, 1, 'ㅏㅑ', 'ㅓㅕ');
console.log(members);

members.splice(1, 0, 'ㅗㅛ', 'ㅜㅠ');
console.log(members);

members.splice(2, 2, 'ㅡㅣ', 'ㅐㅔ');
console.log(members);

//배열 첫 요소 삭제 splice(0, 1)
members.shift();
console.log(members);
//배열 마지막 요소 삭제 splice(length - 1, 1)
members.pop();
console.log(members);
//배열 첫 요소 값 추가 splice(0, 0, 'Nice')
members.unshift('ㅛㅠ');
console.log(members);
//배열 마지막 요소 값 추가 splice(length, 0, 'hi')
members.push('ㅕㅑ');
console.log(members);