const assert = require('assert')

const oneToFive = [1, 2, 3, 4, 5]

var totalOfOddDigits = oneToFive.reduce(function(accumulator, currentValue) {
  // Code this reducer so that the result is the sum
  // of only the odd digits
}, 0)

assert.equal(9, totalOfOddDigits, 'Your total is not 9') || console.log('Success')