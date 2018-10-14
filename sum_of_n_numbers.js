let lastNumber = +process.argv[2];

const sumOfFirstN = function(lastNumber){
  return (lastNumber*(lastNumber+1))/2;
}
console.log(sumOfFirstN(lastNumber));
