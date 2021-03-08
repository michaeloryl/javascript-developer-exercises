// The wait function returns a promise that will resolve after
// the specified number of seconds has passed
const wait = function(seconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000 * seconds)
  })
}

/*
Your task is to write a promise chain using the function
above that waits 1 second before writing "I waited 1 second"
to the console, waits 3 more seconds and then writes
"I waited 3 more seconds"
*/

console.log('Go!')

// PLACE YOUR CODE BELOW

// PLACE YOUR CODE ABOVE

/*
You console output should look like the following AND wait the
appropriate number of seconds before writing each line
when run with "node 8_promise_to_wait.js":

Go!
I waited 1 second
I waited 3 more seconds
*/
