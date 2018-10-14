let principle = +process.argv[2];
let rate = +process.argv[3];
let time = +process.argv[4];

const simpleInterest = function(principle, rate, time){
  return (principle * rate * time)/100;
}

console.log(simpleInterest(principle,rate,time));
