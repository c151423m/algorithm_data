function countUniqueValues(arr) {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

/**
 * 1. Have one variable i with 0
 * 2. For loop with j which starts from 1. This will be the leader who will move the array first
 * 3. if value of arr[i] and arr[j] are not same, this means the value is unique
 * 4. i will be +1 to move
 * 5. arr[i] will assign arr[j] which is the unique value.
 * 6. When j reaches to the end, we return i+1 , which is the # of unique value
 * 7. Why +1 ? Array starts from 0 but i is on the location of last unique value.
 *  Suppose i is on the 6th value. Index wil be 7 because the first value in index is 0
 *  */