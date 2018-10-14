let nthTerm = +process.argv[2];

const evenNumberSeries = function(length){
  let series = "";
  for(let index = nthTerm; index > 0 ; index--){
    if(index % 2 == 0){
      series += index + " ";
    }
  }
  return series;
}

console.log(evenNumberSeries(nthTerm));
