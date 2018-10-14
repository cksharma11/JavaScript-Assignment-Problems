let startOfSeries = +process.argv[2];
let endOfSeries = +process.argv[3];

const sumOfAllOdd = function(start, end){
  let sum = 0;
  for(let index = start; index<=end; index++){
    if(index % 2 != 0){
      sum = sum + index;
    }
  }
  return sum;
}

console.log(sumOfAllOdd(startOfSeries, endOfSeries));

