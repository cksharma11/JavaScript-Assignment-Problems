let startOfSeries = +process.argv[2];
let endOfSeries = +process.argv[3];

const generateSeries = function(start,end){
  let series = "";
  for(let index = start; index<=end; index++){
    if(index % 2 == 0){
      series += index + " ";
    }
  }
  return series;
}

console.log(generateSeries(startOfSeries, endOfSeries));
