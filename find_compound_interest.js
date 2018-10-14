let principle = +process.argv[2];
let rate = +process.argv[3];
let time = +process.argv[4];

const compundInterest = function(principle, rate, time){
  return (principle*Math.pow((1+(rate/100)),time))-principle;
}

console.log(compundInterest(principle,rate,time));
