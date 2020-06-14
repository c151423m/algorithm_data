function validAnagram(first, second) {
//1
  if (first.length !== second.length) {
    return false;
  }
//2
  const lookup = {};
//3
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)
//4
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')

/**
 * 1 Check both params' lengths are same
 * 2. make an object to store 
 * 3. for loop the first item
 *  3-1 assign each letter into the letter
 *  3-2 if these assigned letter in obj exist (=true) , +1 . Else assign 1
 *  3-3
 * 4.For loop the second string
 *  4-1 assign each letter into letter
 *  4-2 if these assigned letter is in obj lookup with value, -1
 *  4-3 if not return false
 * After length is done, return true
 * 
 * NOTE: this solution  tries to cross refer the value and -1 each time
 
 */