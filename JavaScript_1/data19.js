//문자열 심화
let myString = "Hi Codeit";

//길이
console.log(myString.length);

//요소 접근
console.log(myString[3]);
console.log(myString.charAt(3));

//요소 탐색
console.log(myString.indexOf('a')); //앞부터
console.log(myString.lastIndexOf('i')); //뒤부터

//대소문자 변환
console.log(myString.toUpperCase()); //대문자
console.log(myString.toLowerCase()); //소문자

//양 끝 공백 제거
console.log(myString.trim());

//부분 문자열 접근 slice (start, end)
console.log(myString.slice(0, 2));
console.log(myString.slice(3));
console.log(myString.slice());

//배열: mutable -> 바뀔 수 있는 / 문자열: immutable -> 바뀔 수 없는

//예제
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";
let hyungdon = null;

let startIndex = lyrics.indexOf('[형돈]');
let endIndex = lyrics.indexOf('[길]');
hyungdon = lyrics.slice(startIndex, endIndex);

console.log(hyungdon);