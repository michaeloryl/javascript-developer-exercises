var total, addFive

function createAddFunction(numberToAdd) {
  /*
  Implement this function so that it returns a function that will add
  the value of numberToAdd to whatever number parameter is passed to the
  returned function
   */
}

// this should set addFive to a function that will add 5 to whatever
// value is passed to it.
addFive = createAddFunction(5)

// total should end up as 12, the sum of 7 and 5
total = addFive(7)

console.log('The total is %d', total)

/*
You should see the following on the console
when you run "node 5_functions_returning_functions.js":

The total is 12
*/

