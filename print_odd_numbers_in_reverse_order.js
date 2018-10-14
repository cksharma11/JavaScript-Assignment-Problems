let nthTerm = +process.argv[2];

const generateSeries = function(length){
  let series = "";
  for(let index = length; index > 0 ; index--){
    if(index % 2 != 0){
      series += index + " ";
    }
  }
  return series;
}

console.log(generateSeries(nthTerm))
