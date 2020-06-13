//Naive approach should solve the issue but not the best resolution in terms of Big O notation 

function same(arr1, arr2) {

  //1
  if (arr1.length !== arr2.length) {
    return false
  }
  //2
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    //3
    if (correctIndex === -1) {
      return false;
    }
    //4
    arr2.splice(correctIndex, 1)
  }
  //5
  return true;
}




/**
 * 1. Since the length of arrays should be equal, we check the length is same. If not return false
 * 2. Establish a for loop. 
 *  2-1 correctIndex will check the index number of squared arr1[i]
 *  2-2 suppose arr1[0] = 2 , squared number will be 4
 *  2-3 If squared number (4) exists in the arr2, it should return the index number. If not , it will return -1
 * 3. if compare the index with -1. If matches, return false
 * 4. If squared number exists in the arr2, we will splice that number with cprrectIndex( this has the index number)
 * 5 Continue this and when the loop ends, it will return true , which means, the list fulfills the condition
 * 
 * This writing is correct but is O(n^2) notation, a big nono
 * For loop and indexOf function are the Ns
 
 */