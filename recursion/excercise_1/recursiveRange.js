// Write a function called recursiveRange
// which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(10));


/**
 * Straightforward recursion
 * 1.return 0 if the num is 0
 * 2. if not , add up num while calling the function with -1 
 * If you return 1 at if condition, returning value will be +1 
 * eg : if num = 10 , the actual answer is 55 but if you put return 1 , it will return 56.
 */
