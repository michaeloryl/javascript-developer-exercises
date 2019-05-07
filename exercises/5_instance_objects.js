class Tank {
  attack() {
    console.log(`Tank attacks for ${this.power()} damage!`)
  }
  power() {
    return 3
  }
}

const tanks = [
  new Tank(),
  new Tank(),
]

// On a single line, make all tanks attack for 7 instead of 3.
// PLACE YOUR CODE BELOW

Tank.prototype.power = () => 7;

// PLACE YOUR CODE ABOVE
// You are only allowed to write one line of code above.  Do not alter any other lines of code.

tanks.push(new Tank())

tanks.forEach(tank => {
  tank.attack()
})

/*
When run on the console with "node 5_instance_objects.js" you
should see the following on the console:

Tank attacks for 7 damage!
Tank attacks for 7 damage!
Tank attacks for 7 damage!
*/

