let firstValue = +process.argv[2];
let secondValue = +process.argv[3];

const findLCM = function(firstValue,secondValue){
  let gcd, lcm;
  for (let index=1 ; index<=firstValue && index<= secondValue ; index++){
   if(firstValue % index == 0 && secondValue % index == 0){
      gcd = index;
    }
    lcm = (firstValue * secondValue)/gcd;
  }
  return lcm;
}

console.log(findLCM(firstValue, secondValue));
