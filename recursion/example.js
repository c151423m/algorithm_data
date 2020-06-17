function countDown(num) {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(3));

/**
 * This is how recursion is structured
 * Above code intends to count down num by printing out.
 * It can be done with loops, but this intends to use recursion , where you call the function again within the function
 *
 *
 *
 * if num = 4
 *
 * - the IF condition will be false as it is higher than 0
 * - console.log the num
 * - deduct one and then call the function at the end
 * -- Repeat the check and log
 * -- When the num reached to 0 , it will then execute the console.log inside the condition and return (end)
 */
