let value = +process.argv[2];

const isOdd = function(num){
  return (num % 2 != 0)
}

console.log(isOdd(value));
