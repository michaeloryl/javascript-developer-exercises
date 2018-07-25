const assert = require('assert')

const initialArray = [
  {
    rideShareId: 1,
    members: [
      {
        name: 'John',
        vehicleMake: 'BMW',
      },
      {
        name: 'Michael',
        vehicleMake: 'Hyundai',
      },
    ],
  },
  {
    rideShareId: 2,
    members: [
      {
        name: 'Matt',
        vehicleMake: 'Volkswagen',
      },
      {
        name: 'Paul',
        vehicleMake: 'Ford',
      },
      {
        name: 'Ethan',
        vehicleMake: 'Nissan',
      },
    ],
  },
  {
    rideShareId: 3,
    members: [
      {
        name: 'Aurora',
        vehicleMake: 'Subaru',
      },
      {
        name: 'Chris',
        vehicleMake: 'Huffy',
      },
    ],
  },
]

const expectedArray = [
  {
    rideShareId: 1,
    numberMembers: 2,
  },
  {
    rideShareId: 2,
    numberMembers: 3,
  },
  {
    rideShareId: 3,
    numberMembers: 2,
  },
]

function flattenRideshareArray(array) {
  var newArray = array.map(function(element) {
    // Add code here so that flattenRideshareArray will change
    // initialArray into an array that is equal to expectedArray
  })

  return newArray
}

assert.deepEqual(expectedArray, flattenRideshareArray(initialArray), 'Arrays are not equal') || console.log('Success')

