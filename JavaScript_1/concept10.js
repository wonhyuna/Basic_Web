//옵셔널 파라미터
function introduce(name, age, nationality = '한국'){
  console.log(`이름: ${name}, 나이: ${age}, 국적: ${nationality}`);
}

introduce('코드잇', 2);

function order(sandwich, drink = '스프라이트'){
  console.log(`음식: ${sandwich}, 음료: ${drink}`);
}

order('에그마요');
order('크림도넛', '코카콜라');