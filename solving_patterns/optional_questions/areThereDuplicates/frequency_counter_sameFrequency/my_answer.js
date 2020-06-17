

function sameFrequency(num1, num2) {
  //1 
  let num1String = num1.toString().split('')
  let num2String = num2.toString().split('')
  //1-1
  if (num1String.length !== num2String.length) {
    return false
  }
  //2. Make an object that will store the first param values
  const lookup = {};
  for (let i = 0; i < num1String.length; i++) {
    //assign each digit to digit
    let digit = num1String[i]
    //2-2
    lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1
  }
  // console.log(lookup);



  //3
  for (let i = 0; i < num2String.length; i++) {
    let digit = num2String[i]
    if (!lookup[digit]) {
      return false
    } else {
      lookup[digit] -= 1;
    }
  }
  return true
}


console.log(sameFrequency(182, 281));//true
console.log(sameFrequency(34, 13));//false
console.log(sameFrequency(3589578, 5879385));//true
console.log(sameFrequency(22, 222));//false


/**
 * For this question, we will be using frequency counter method, which will utilize object
 * This is basically same as anagram but for int
 */

/**
 * 1 integer cannot be counted its length . You need to stringify and split the value into array
 * 1-1 Edge case detector to check if num1.length and num2.length is same.
 *  - If not, then return false
 *
 *
 *
 * 2. Make an obj
 * -2-1 For loop first param
 * -2-2 If the looped value does not exist in the obj, +1. If exist +1 to the existing value
 *
 * 3. For loop second param
 * -3-1 if the value exists in the obj as a key, -1 the value of that key
 * -3-2 else, return false
 * -3-3 if the loop ends with -1 all the existing obj , then it verifies that the param 1 and param2 are same
 */
