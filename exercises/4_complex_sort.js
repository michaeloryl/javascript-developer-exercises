/*

  Sort the following array of objects properly by implementing the specialSort function.

  The sort rules are as follows:

  1) Sort order is determined by the object's sortKey property
  2) String keys come before number keys: '3', 3
  3) String keys are sorted in descending order: '5', '2', '0'
  4) Number keys are sorted in ascending order: 2, 5, 7

  So the following list of keys: 1, '2', 3, '4'

  Would should be sorted as: '4', '2', 1, 3

 */

let widgets = [
  {name:'Thingamabob', sortKey: 3},
  {name:'Bip', sortKey: 9},
  {name:'Thingamajig', sortKey: '3'},
  {name:'Whatchamacallit', sortKey: '9'},
  {name:'Bop', sortKey: 0},
  {name:'Whatsit', sortKey: '2'},
  {name:'Thingy', sortKey: 7},
  {name:'Doohickey', sortKey: '5'},
  {name:'Doodad', sortKey: 2},
]

function specialSort(el1, el2) {
  // PLACE YOUR CODE BELOW

  // PLACE YOUR CODE ABOVE
}

let sortedNames = widgets.sort(specialSort) // call your sort function
  .map(el => el.name) // extract only the names
  .join(', ') // make a comma separated list out of them

console.log('Names:', sortedNames)

console.assert(sortedNames === 'Whatchamacallit, Doohickey, Thingamajig, Whatsit, Bop, Doodad, Thingamabob, Thingy, Bip', 'String did not match expected value')

/*
  You should see the following as output:

  Names: Whatchamacallit, Doohickey, Thingamajig, Whatsit, Bop, Doodad, Thingamabob, Thingy, Bip

  If you see an "Assertion Failed" message, then things didn't work correctly.
 */
