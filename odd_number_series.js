let lengthOfSeries = +process.argv[2];

const oddNumberSeries = function(length){
  series = "";
  for(let index = 1; index <= lengthOfSeries; index += 2 ){
   series += index + " ";
  }
  return series;
}

console.log(oddNumberSeries(lengthOfSeries));
