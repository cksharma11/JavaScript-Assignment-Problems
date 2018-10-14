let value = +process.argv[2];

const isEven = function(num){
  return (num % 2 == 0);
}

console.log(isEven(value));
