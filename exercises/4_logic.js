const assert = require('assert')

function paintMixer(color1, color2) {
  /*
  * Add code here that will take two string params, color1 and color2
  * It will then determine what those two colors would create when mixed
  * blue and red should mix to 'purple'
  * green and red should mix to 'brown'
  * blue and yellow should mix to 'green'
  * and anything with unknown colors should return a result of 'unknown'
  * */
}

assert.equal(paintMixer('blue', 'red'), 'purple', 'blue and red did not mix to purple') || console.log('First mix worked')
assert.equal(paintMixer('green', 'red'), 'brown', 'green and red did not mix to brown') || console.log('Second mix worked')
assert.equal(paintMixer('blue', 'yellow'), 'green', 'blue and yellow did not mix to green') || console.log('Third mix worked')
assert.equal(paintMixer('apple', 'frog'), 'unknown', 'apples and frogs should not mix') || console.log('Apples and frogs don\'t mix, as expected')
