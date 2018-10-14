let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let thirdNumber = +process.argv[4];

const averageOfThree = function(num1,num2,num3){
  let average = (num1+num2+num3)/3;
  return average;
}

let average = averageOfThree(firstNumber,secondNumber,thirdNumber);
console.log(average);
