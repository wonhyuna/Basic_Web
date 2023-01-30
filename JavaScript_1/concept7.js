//null (의도적으로 값이 없음을 표현) VS undefined (값이 처음부터 없었다는 것을 표현)
let codeit;
console.log(codeit); //값이 없으므로 undefined

codeit = null;
console.log(codeit); //의도적으로 null값 넣기

//null undefined 차이
console.log(null == undefined); //동등
console.log(null === undefined); //일치