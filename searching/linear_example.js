// Write a function called linearSearch which accepts and a value,
// and returns the index at which the value exists.
// If the value does not exist in the array, return 1

//DONT USE indexOf to implement this function

//Linear Search with indexOf

function linearSearch(arr, val) {
  return arr.indexOf(val);
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 9], 5)); //4

//Linear Search with no indexOf

function linearSearch2(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch2([1, 2, 3, 4, 5, 6, 7, 88, 99, 333], 6)); //5
