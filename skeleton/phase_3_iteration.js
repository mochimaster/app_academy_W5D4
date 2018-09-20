Array.prototype.bubbleSort = function () {
  
  let not_sorted = true;
  
  while (not_sorted){
    not_sorted = false;
    
    let i = 0;
    
    for(i; i < this.length-1; i++){
        if (this[i] > this[i+1]){
          not_sorted = true;
          temp_var = this[i];
          
          this[i] = this[i+1];
          this[i+1] = temp_var;
        }
    }
  }
  console.log(this);
  return this;
};

[1,3,2,5,4].bubbleSort();