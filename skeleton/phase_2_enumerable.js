Array.prototype.myEach = function (callback) {
  
  let counter = 0;
  const result = [];
  
  for (counter; counter < this.length; counter++){
    console.log(this[counter]);
    result.push(this[counter]);
  }
  
  console.log(`myEach result: ${result.toString(" ")}`);
  console.log(result);
  return result;
  
};
[1,3,5].myEach();


Array.prototype.myMap = function (callback) {
  let counter = 0;
  const result = [];
  for (counter; counter < this.length; counter++) {
    //console.log(this[counter]);
    result.push(callback(this[counter]));
  }
  console.log(result);
  return result;
};
[1,2,3].myMap(function(el) {
  return el*el;
});

Array.prototype.myReduce = function(callback,initialValue) {
  let accumulator = initialValue || this[0];
  let counter = 0;
  if (accumulator === this[0] && !initialValue) {
    counter ++;
  }
  
  for (counter; counter < this.length; counter++) {
    accumulator = (callback(accumulator,this[counter]));
  }
  console.log(accumulator);
  return accumulator;
};

[1,2,3,10,12].myReduce(function(acc,el){
  return acc*el;
},2);