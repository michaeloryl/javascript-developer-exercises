const assert = require('assert')

const initialArray = [
  {
    id: 1,
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
    id: 2,
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
  {
    id: 3,
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
        name: 'Mark',
        vehicleMake: 'Ford',
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
    numberMembers: 2,
  },
  {
    rideShareId: 3,
    numberMembers: 3,
  },
]

function convertRideshareArray(array) {
  var i = 0;
  var newArray = array.map(function(element) {
    /*
    Add code here so that convertRideshareArray will change
    initialArray into an array that is equal to expectedArray
    */
    // PLACE YOUR CODE BELOW

    i++;
    return {
      rideShareId: i,
      numberMembers: element.members.length
    }

    // PLACE YOUR CODE ABOVE
  })

  return newArray
}

assert.deepEqual(expectedArray, convertRideshareArray(initialArray), 'Arrays are not equal') || console.log('Success')

/*
When run with "node 3_data_transformation.js" you should see the
the following on the console:

Success
*/
