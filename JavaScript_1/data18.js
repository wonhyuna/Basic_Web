function interestCalculator(rate, payment, term){
  let interest = payment * term * (term+1) / 2 * rate / 12;
  return interest;
}

console.log(interestCalculator(0.043, 800000, 24));