let startOfSeries = +process.argv[2];
let endOfSeries = +process.argv[3];

const sumOfNumbers = function(start, end){
  let sum = 0;
  for(let index = start; index<=end; index++){
    sum = sum + index;
  }
  return sum;
}

console.log(sumOfNumbers(startOfSeries, endOfSeries));
