let startOfSeries = +process.argv[2];
let endtOfSeries = +process.argv[3];

const findProduct = function(start, end){
  let product = 1;
  for(let index = start; index<=end; index++){
    product = product * index;
  }
  return product;
}

console.log(findProduct(startOfSeries,endtOfSeries));
