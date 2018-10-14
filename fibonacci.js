let lengthOfSeries = +process.argv[2];

const fibSeries = function(length){
  let firstTerm = -1;
  let secondTerm = 1;
  let series = "";

  for(let index = 0;index < length; index++){
    let nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    series += nextTerm + " ";
  }
  return series;
}

console.log(fibSeries(lengthOfSeries));
