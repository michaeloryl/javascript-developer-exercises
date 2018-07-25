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

// On the following line, make all minions attack for 9 instead of 5.

// You are only allowed to write one line of code.

minions.push(new Minion())

minions.forEach(minion => {
  minion.attack()
})
