let voca = {
  function: '함수',
  variable: '변수',
  constant: '상수',
  local: '지역의',
  global: '전반적인'
}

delete voca.function;
delete voca.constant;
delete voca.global;

voca.extend = '확장하다';
voca.export = '내보내다';
voca.import = '불러오다';
voca['default value'] = '기본값';

console.log(voca)
console.log(voca['default value']);