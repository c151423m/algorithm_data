function validAnagram(item1, item2) {
  let countItem1 = {}
  let countItem2 = {}



  if (item1.length != item2.length) {
    return false
  }

  for (let letter of item1) {
    countItem1[letter] = (countItem1[letter] || 0) + 1
    console.log();
  }

  console.log(countItem1);


  for (let letter of item2) {
    countItem2[letter] = (countItem2[letter] || 0) + 1
  }
  console.log(countItem2);


  for (let key in countItem1) {
    if (!(key in countItem2)) {
      return false
    }
    if (countItem2[key] !== countItem1[key]) {
      return false
    }
  }
  return true

}

console.log(validAnagram('car', 'tac'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('', ''));





/**
 * 1. Have two empty objects to count the letter frequency for each item
 * 2. Check if the length of each item is same
 * 3. for loop each item and store the letter counter in the object
 * 4. for /in loop the objects and check..
 *  4-1 if key value (letter) exists in item2 obj
 *  4-2 if value of each key (frequency of letter) is same
 * If not met, each will return false 
 * If met, will return true
 */