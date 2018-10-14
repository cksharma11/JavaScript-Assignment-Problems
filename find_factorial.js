let value = +process.argv[2];

const findFactorial = function(num){
  let factorial = num;
  for(let index = num; index >2 ; index--){
    factorial = factorial * (index-1);
  }
  return factorial;
}

console.log(findFactorial(value));
