const assert = require('assert')

const oneToFive = [1, 2, 3, 4, 5]

var totalOfOddDigits = oneToFive.reduce(function(accumulator, currentValue) {
  // Code this reducer so that the result is the sum
  // of only the odd digits. Do not alter any other code.
  // PLACE YOUR CODE BELOW

  // PLACE YOUR CODE ABOVE
}, 0)

console.log('The total is %d', totalOfOddDigits)

/*
When run with "node 6_reduce_an_array.js" you should see the
following on the console:

The total is 9
*/