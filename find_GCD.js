let firstValue = +process.argv[2];
let secondValue = +process.argv[3];

const findGCD = function(firstValue, secondValue){
  let gcd;
  for (let index=1 ; index<=firstValue && index<= secondValue ; index++){
    if(firstValue % index == 0 && secondValue % index == 0){
      gcd = index;
    }
  }
  return gcd;
}

console.log(findGCD(firstValue, secondValue));
