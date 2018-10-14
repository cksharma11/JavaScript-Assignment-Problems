let value = +process.argv[2];

const cube = function(value){
  return value*value*value;
}

console.log(cube(value));
