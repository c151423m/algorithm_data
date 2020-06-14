function same(arr1, arr2) {
  //1
  if (arr1.length !== arr2.length) {
    return false;
  }
  //2
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {

    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1


  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);



  //3
  for (let key in frequencyCounter1) {
    console.log(frequencyCounter1[key]);
    console.log(frequencyCounter2[key]);



    //3-1
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    //3-2
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))


/**
 * 1 Check if the length of arrays match
 *
 * 2. This part initiates two objs
 *  2-1. the for of loop will iterate through the arrays
 *  2-2 if the frequencyCounter1[val] is empty, it will return undefined. undefined +1 will return NaN so it will not work
 *  2-3 So here, it will assign zero if the frequencyCounter1[val] is undefined.
 *  2-4 If it's not undefined ( meaning it already exists) then it will add 1 more.
 *
 * 3. For loop through the counter
 * NOTE : this is for/in loop. key will have the key of the object {key:value}
 *  3-1 If square of counter1 key exists in the counter 2, go to the next if.
 *   For this case, if 2^2 exists ( key : 4) then it is true
 *  3-2 if the value of squared key in Counter2 and value of counter1[key] is not same, return false
 *    For example, counter1 second key [2].(value is 2). Counter2 will be 2**2 =4 and value is 2 as well
 * Go through the loop and if all met, return true
 *
 *
 * Although this function has 3 for loops, it is not nested and has individual for loops
 * This means it will be O(3n) so it will be simplified to O(n)
 *
 */