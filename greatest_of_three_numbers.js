let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let thirdNumber = +process.argv[4];

const maxNumber = function(num1,num2,num3){
  let max = num1;
  (max < num2) && (max = num2);
  (max < num3) && (max = num3);
  return max;
}

console.log(maxNumber(firstNumber, secondNumber, thirdNumber));
