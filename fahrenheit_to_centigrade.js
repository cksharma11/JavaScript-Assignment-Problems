let fahrenheit = +process.argv[2];

const centigradeToFahrenheit = function(fahrenheit){
  let centigrade = (5*(fahrenheit-32))/9;
  return centigrade;
}

console.log(centigradeToFahrenheit(fahrenheit));
