//switch문
let myChoice = 5;
switch(myChoice){
  case 1:
    console.log("토끼");
    break;
  case 2:
    console.log("고양이");
    break;
  case 3:
    console.log("코알라");
    break;
  case 4:
    console.log("강아지");
    break;
  default:
    console.log("1~4 사이의 숫자를 선택하세요.");
}

function checkPrice(grade){
  switch(grade){
    case "R":
      console.log(`${grade}석은 13만원입니다.`);
      break;
    case "VIP":
      console.log(`${grade}석은 15만원입니다.`);
      break;
    case "S":
      console.log(`${grade}석은 10만원입니다.`);
      break;
    case "A":
      console.log(`${grade}석은 8만원입니다.`);
      break;
    default:
      console.log("VIP, R, S, A 중에 하나를 선택해주세요.");
    
  }
}

checkPrice("R");
checkPrice("VIP");
checkPrice("S");
checkPrice("A");