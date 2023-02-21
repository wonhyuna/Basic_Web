let members = ['가나', '다라', '마바', '사아', '자차', '카타', '파하'];

console.log(members.length);
console.log(members['length']);
console.log(members[members.length - 1]);

members[5] = 'ㅏㅑ';
console.log(members[5]);

console.log(members);
delete members[4];
console.log(members);

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++){
  fahrenheitTemps[i] = celsiusTemps[i] * 9 / 5 + 32;
}
console.log(fahrenheitTemps);