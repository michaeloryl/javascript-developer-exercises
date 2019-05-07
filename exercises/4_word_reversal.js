let assert = require('assert')

/*
  Given the variable 'statement' below, write a function that reverses
  the letters in each word, but leaves the words in the same order
*/

let statement = 'Penn Mutual sells life insurance'

function reverseLetters(str) {
  // PLACE YOUR CODE BELOW

  return str.split(/\W/).map(function(word) {
    var reversedWord = word.split('').reverse().join('');
    return reversedWord;
  }).join(' ');

  // PLACE YOUR CODE ABOVE
}

let reversedWords = reverseLetters(statement)
console.log(reversedWords)
assert.equal(reversedWords, 'nneP lautuM slles efil ecnarusni', 'Strings are not equal') || console.log('Success')



/*
  Your console output should look like the following
  when run with "node 4_word_reversal.js":

Success
nneP lautuM slles efil ecnarusni

*/