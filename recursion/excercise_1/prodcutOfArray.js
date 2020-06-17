//Write a function called productOfArray which takes in an arry of numbers
//  and returns the product of them all

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3,5,6,7,8,9,20]));


/**
 * NOTE : Recursion is easy to overthink
 * Think simple and don't try to use helper
 *
 * 1. Check if the array length is 0. If it is , return 1,
 * 2. if [1,2,3]= It should be ((1x2)x3)
 * 3. arr[0]* then call the function with arr.slice(1)
 */

