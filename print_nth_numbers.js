let startOfSeries = +process.argv[2];
let endOfSeries = +process.argv[3];
let interval = +process.argv[4];

const generateSeries = function(start, end, interval){
  let series = "";
  for(let index = startOfSeries; index <= endOfSeries; index += interval){
    series += index + " ";
  }
  return series;
}

console.log(generateSeries(startOfSeries, endOfSeries, interval));
