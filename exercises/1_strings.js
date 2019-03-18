var words = [
  'cat',
  'zone',
  'find',
  'supper',
  'storm',
]

var wordList = "You need to save your words into wordList"

/*
Process the array so that you take the word formed by the second and
third character in each word ('in' from 'find') and save it.

Once you have those words, turn them into a comma and space delimited
list (ie. the words are separated by ", ").

Take that comma delimited list and store it in the wordList variable.

Place your code that does all of this below this comment block, and
before the next comment block.
*/
// PLACE YOUR CODE BELOW
var subWords = words.map(x => x.substring(1, 3))
wordList = subWords.join(', ')

// PLACE YOUR CODE ABOVE
/*
When run with "node 1_strings.js" you should see the following on
the console:

Success
at, on, in, up, to
*/

wordList === 'at, on, in, up, to' && console.log('Success')
console.log(wordList)