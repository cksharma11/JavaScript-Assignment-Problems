let value = +process.argv[2];

const findProduct = function(value){
  let product = value;
  for(let index = value; index>2; index--){
    product *=(index-1);
  }
  return product;
}
console.log(findProduct(value));
