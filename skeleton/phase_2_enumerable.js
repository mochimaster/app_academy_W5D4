Array.prototype.myEach = function (callback) {
  for (let counter = 0; counter < this.length; counter++){
    // console.log(this[counter]);
    callback(this[counter]);
    // result.push(this[counter]);
  }
  
  // console.log(`myEach result: ${result.toString(" ")}`);
  // console.log(result);
  // return result;
  return this;
  
};

[1,3,5].myEach(function(el) { 
  console.log(el * el);
});


Array.prototype.myMap = function (callback) {
  // let counter = 0;
  const result = [];
  // for (let counter = 0; counter < this.length; counter++) {
  //   //console.log(this[counter]);
  //   result.push(callback(this[counter]));
  // }
  // console.log(result);
  // return result;
  this.myEach(function(el) {
    result.push(callback(el));
  });
  
  return result;
};

[1,2,3].myMap(function(el) {
  return el*el;
});

Array.prototype.myReduce = function(callback,initialValue) {
  let counter = 0;
  let accumulator = initialValue;
  if (accumulator === undefined) {
    let accumulator = this[0];
    counter ++;
  }
  
  for (; counter < this.length; counter++) {
    accumulator = callback(accumulator,this[counter]);
  }
  console.log(accumulator);
  return accumulator;
};

[1,2,3,10,12].myReduce(function(acc,el){
  return acc*el;
},2);