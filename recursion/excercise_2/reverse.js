//Write a recursive function called reverse
//Which accepts a string and returns a new string in reverse

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

/**
 *
 * This probably needs helper or dirty writing
 *
 * 1. If the length of string is 1 , then just return as it is
 * 2. The str.slice(1) will remove the 1st letter through recursion
 * 3. Slice will not change the original array.
 * 4. Then add 0 index of string to the end
 * 
 * EG : "Hello"
 * Each iteration will cut the first letter
 * 
 * ello + H
 * llo + e
 * lo + l
 * o + l
 * o return 
 */


 console.log(reverse("hello"));
 