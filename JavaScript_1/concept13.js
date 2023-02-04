//if문 (if statement)
function checkHeight(height){
  if(height >= 140){
    console.log("탑승이 가능합니다.");
  }else{
    console.log("탑승이 불가능합니다.");
  }
}

checkHeight(141);
checkHeight(130);
checkHeight(170);


let temperature = 90;

if(temperature <= 0){
  console.log("물이 업니다.");
}else if(temperature < 100){
  console.log("물이 얼지도 끓지도 않습니다.");
}else{
  console.log("물이 끓습니다.")
}

function printGrade(mid, final){
  let total = mid + final;
  if(total >= 90){
    console.log("A");
  }else if(total >= 80){
    console.log("B");
  }
  else if(total >= 70){
    console.log("C");
  }
  else if(total >= 60){
    console.log("D");
  }
  else{
    console.log("F");
  }
}

printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);


myAge = 24;
myGender = "여성"
function Call(yourAge, yourGender){
  if(myAge == yourAge){
    console.log("친구");
  }else if (myAge > yourAge){
    if (yourGender == "여성"){
      console.log("여동생");
    }else{
      console.log("남동생");
    }
  }else{
    if (yourGender == "여성"){
      console.log("언니");
    }else{
      console.log("오빠");
    }
  }
}

Call(19, '여성');
Call(20, '남성');
Call(24, '여성');
Call(25, '남성');
Call(31, '여성');