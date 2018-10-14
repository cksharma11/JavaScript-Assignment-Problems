let lastTerm = +process.argv[2];

const sumOfN = function(lastTerm){
  let sum = 0;
  for(let index = 1; index <= lastTerm; index++){
    sum = sum + index;
  }
  return sum;
}

console.log(sumOfN(lastTerm));
