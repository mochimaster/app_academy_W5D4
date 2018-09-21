function range(start,end) {
  if (start === end){
    return [end];
  }
  let currentStackArray = range((start+1),end); // [3] -->
  currentStackArray.unshift(start); // [2,3]
  return currentStackArray; // return [2,3]
  // range((start+1),end).unshift(start);
}

console.log(range(1,3));


// for recursion
// you have a return statement which is your basecase
// this return starts your cascade of call-stack returns
// inside of your call stack returns (when you are returning from top to bottom)
// you will need another return statement to get back up the call stack
// the final return statement, is what your function returns
//callstack #, start, end, current return value
//          1,     1, 3,  undefined
//          2,     2, 3,  undefined
//          3,     3, 3,  [3]
//          2,     2, 3,  [3].unshift(2)
//          1,     1, 3,  [2,3].unshift(1)
// [1,2,3]
// should return 6
// [1] + [2,3]
// [1] + [2] + [3]
// arr = [5]
// arr = [5,10]
function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1,arr.length));
}

console.log(sumRec([1,2,3]));


function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp-1);
}

console.log(exponent(2,3));

// fib(3)
// should return [1,1,2]
// when n == 3
// fib(n) == fib(n-1) + fib(n-2)
function fibonacci(n) {
  if (n <= 2) {
    return [0,1].slice(0,n);
  } 
  let fibs = fibonacci(n-1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}


console.log(fibonacci(5));