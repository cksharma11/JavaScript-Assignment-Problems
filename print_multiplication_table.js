let value = +process.argv[2];
let lengthOfTable = +process.argv[3];

const multiplication = function(value, lengthOfTable){
  let table = "";
  for(let index = 1; index<= lengthOfTable; index++){
    table += index*value + "\n";
  }
  return table;
}

console.log(multiplication(value, lengthOfTable));
