let lengthOfSeries = process.argv[2];
let series = "";

const generateSeries = function(length){
  for(let index = 2; index <= length; index += 2){
    series += " "+index;
  }
  return series;
}

let evenSeries = generateSeries(lengthOfSeries);
console.log(evenSeries);

