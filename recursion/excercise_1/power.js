// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of

function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(3, 3));
console.log(power(4,4));//256


/**
 *
 * 3* (3,3-1)
 * 3*(3,2-1)
 *  3*(3,0)
 */

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
