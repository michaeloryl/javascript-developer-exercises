const assert = require('assert')

const oneToFive = [1, 2, 3, 4, 5]

var totalOfOddDigits = oneToFive.reduce(function(accumulator, currentValue) {
  // Code this reducer so that the result is the sum
  // of only the odd digits
}, 0)

console.log('The total is %d', totalOfOddDigits)

/*
When run with "node 2_reduce_an_array.js" you should see the
the following on the console:

The total is 9
*/