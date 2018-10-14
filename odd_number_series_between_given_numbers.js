let startOfSeries = +process.argv[2];
let endOfSeries = +process.argv[3];

const oddNumberSeries = function(start, end){
  let series = ""; 
  for(let index = start; index <= end; index++){
    if(index % 2 != 0){
      series += index + " ";
    }
  }
  return series;
}

console.log(oddNumberSeries(startOfSeries, endOfSeries));

