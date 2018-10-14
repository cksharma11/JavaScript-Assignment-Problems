let centigrade = process.argv[2];

const centigradeToFahrenheit = function(centigrade){
  let fahrenheit = ((centigrade * 9)/5)+32;
  return fahrenheit;
}

let covertedTemprature = centigradeToFahrenheit(centigrade);
console.log(covertedTemprature);
