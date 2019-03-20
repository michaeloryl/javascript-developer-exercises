const assert = require('assert')

const numberList = [3, 7, 8, 19, 18, 11, 17, 4, 14, 5]

let totalOfOddNumbers = numberList.reduce(function(accumulator, currentValue) {
  // Code this reducer function so that the result is the sum
  // of only the odd values (3, 7, 19, etc). Do not alter any other code.
  // PLACE YOUR CODE BELOW

  // PLACE YOUR CODE ABOVE
}, 0)

console.log('The total is %d', totalOfOddNumbers)

/*
When run with "node 6_reduce_an_array.js" you should see the
following on the console:

The total is 62
*/
