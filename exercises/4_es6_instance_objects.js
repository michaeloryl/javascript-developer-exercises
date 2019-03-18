class Minion {
  attack() {
    console.log(`Minion attacks for ${this.power()} damage!`)
  }
  power() {
    return 5
  }
}

const minions = [
  new Minion(),
  new Minion(),
]

// On a single line, make all minions attack for 9 instead of 5.
// PLACE YOUR CODE BELOW
Minion.prototype.power = () => 9
// PLACE YOUR CODE ABOVE
// You are only allowed to write one line of code above.  Do not alter any other lines of code.

minions.push(new Minion())

minions.forEach(minion => {
  minion.attack()
})

/*
When run on the console with "node 4_es6_instance_objects.js" you
should see the following on the console:

Minion attacks for 9 damage!
Minion attacks for 9 damage!
Minion attacks for 9 damage!
*/

