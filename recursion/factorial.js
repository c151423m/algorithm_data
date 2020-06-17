// How to write factorial ( 累乗) in recursion

factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(10));


/**
 * Check if the num is 1
 * if not num x num-1 
 * this will call factorial again and continue until factorial(1)
 */
 