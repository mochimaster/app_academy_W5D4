Array.prototype.my_uniq = function () {
  const result = [];
  this.forEach(function(el) {
    
    if (!result.includes(el)) {
      result.push(el);
    }    
  });
  console.log(result);
  return result;
};

[1,2,3,1].my_uniq();

Array.prototype.twoSum = function () {
  const result = [];
  

  for(let i=0; i<this.length-1; i++){
    for(let j=i+1; j<this.length; j++){
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      } 
    }
  }
  console.log(result);
  return result;
};

[1,2,3,-1,-1].twoSum();


Array.prototype.transpose = function () {
  const result = [];
  
  for(let i=0; i<this.length; i++){
    let inner_array = [];
    for(let j=0; j<this[i].length; j++){
      inner_array.push(this[j][i]);
      } 
      result.push(inner_array);
    }
  console.log(result);
  return result;
};

[[1,2,3],[4,5,6],[7,8,9]].transpose();

