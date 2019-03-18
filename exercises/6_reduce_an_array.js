const assert = require('assert')

const oneToFive = [5, 1, 2, 3, 4]

let totalOfOddDigits = oneToFive.reduce(function(accumulator, currentValue) {
  // Code this reducer so that the result is the sum
  // of only the odd values (5, 1, and 3). Do not alter any other code.
  // PLACE YOUR CODE BELOW
  return accumulator + (currentValue % 2 === 1 ? currentValue : 0 )
  // PLACE YOUR CODE ABOVE
}, 0)

console.log('The total is %d', totalOfOddDigits)

/*
When run with "node 6_reduce_an_array.js" you should see the
following on the console:

The total is 9
*/
