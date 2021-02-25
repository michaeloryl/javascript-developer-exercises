const assert = require('assert')

const numberList = [
  {name: 'Fred', age: 53},
  {name: 'Barney', age: 49},
  {name: 'Barb', age: 41},
  {name: 'Star', age: 43},
  {name: 'Linda', age: 79},
  {name: 'Paul', age: 78},
  {name: 'Mary', age: 27},
]

let namesList = numberList.reduce(function(accumulator, currentValue) {
  // Code this reducer function so that the result is an array of
  // all the names of those people who have an odd numbered age
  //
  // PLACE YOUR CODE BELOW

  // PLACE YOUR CODE ABOVE
}, [])

console.log('The total is', namesList)

/*
When run with "node 6_reduce_an_array.js" you should see the
following on the console:

The total is [ 'Fred', 'Barney', 'Barb', 'Star', 'Linda', 'Mary' ]
*/
