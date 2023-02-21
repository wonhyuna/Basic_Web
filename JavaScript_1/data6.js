let voca = {
  addVoca: function(english, korean){
    voca[english] = korean;
  },
  deleteVoca: function(english){
    delete voca[english];
  },
  printVoca: function(english){
    console.log(`${english}의 뜻은 ${voca[english]}`);
  }
}

// addVoca메소드 테스트 코드
voca.addVoca('parameter', '매개 변수');
voca.addVoca('element', '요소');
voca.addVoca('property', '속성');
console.log(voca);

// deleteVoca메소드 테스트 코드
voca.deleteVoca('parameter');
voca.deleteVoca('element');
console.log(voca);

// printVoca메소드 테스트 코드
voca.printVoca('property');