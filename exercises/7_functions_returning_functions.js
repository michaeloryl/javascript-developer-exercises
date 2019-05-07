var getSecondElement, secondElement

/*
Implement the below code so that createGetFunction returns a function.  That returned
function should accept an array and return whichever element was specified by the
parameter passed to createGetFunction when it was called.
*/
function createGetFunction(elementToReturn) {
  // PLACE YOUR CODE BELOW

  return (arr) => arr[elementToReturn - 1];  

  // PLACE YOUR CODE ABOVE
}

// this should set getSecondElement to a function that will return the second element
// of any array passed to it.
getSecondElement = createGetFunction(2)

// pass an array, expect the second element to be returned
secondElement = getSecondElement(['lions', 'tigers', 'bears', 'oh', 'my'])

// see if it all worked
secondElement === 'tigers' && console.log('Success')
console.log('The second element is %s', secondElement)

/*
You should see the following on the console
when you run "node 7_functions_returning_functions.js":

Success
The second element is tigers
*/

