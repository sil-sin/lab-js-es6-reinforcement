// // ***************************************************************************
// // Iteration 1 - `for...of` loop
// // ***************************************************************************
let usersArray = require('./data.js')
const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
    // Your code goes here ...
  }
  console.log(userFirstNames)
};

getFirstNames(usersArray);
// // expected output:
// // [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// // ***************************************************************************
// // Iteration 2 - `for...of` loop and ES6 string literals `${}`
// // ***************************************************************************

const getFullNames = arr => {
  let results = []
  for (let name of arr) {
    let { firstName, lastName } = name
    results.push({ firstName, lastName })
  }
  return results
};
console.log(getFullNames(usersArray));

// // expected output:
// // [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
// //   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// // ***************************************************************************
// // Iteration 3 - ES6 destructuring , for of loop, object literal
// // ***************************************************************************

const getUsersCreditDetails = arr => {
  let fullName = []
  for (let user of arr) {
    let { firstName, lastName, balance } = user
    fullName.push({ firstName, lastName, balance })
  }

  return (fullName)

};

// console.log(getUsersCreditDetails(usersArray));
// // expected output:
// // [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// // { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// // { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// // { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// // { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// // { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// // { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// // ***************************************************************************
// // Iteration 4 - practice `.filter()` method and how to return two elements
// // ***************************************************************************

const genderView = users => {
  let females = []
  let males = []

  users.filter((user) => {
    let { firstName, lastName } = user
    if (user.gender === "female") {
      females.push(`${firstName} ${lastName} `)
    }
    else {
      males.push(`${firstName} ${lastName} `)
    }
  })
  return {
    femaleUser: females,
    maleUser: males
  }
};

console.log(genderView(usersArray));

// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  let { femaleUser: arr, maleUser: arr1 } = data
  return `Female : ${arr.length}
  Male : ${arr1.length}`

};

console.log(genderCount(data));

// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************
let onlyNumbers = []
const promo20 = users => {

  for (let user of users) {
    let { balance, firstName } = user
    let string = ''
    for (let i = 1; i < balance.length; i++) {
      if (balance.charAt(i) !== ',') {
        string += balance.charAt(i)
      }
    }
    if (+(string) > 20000) {
      onlyNumbers.push(firstName)
      console.log(`Dear ${firstName}, since your balance is ${balance}, you are eligible to apply for this awesome credit card.`)

    }
  }

}
console.log(promo20(usersArray))
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

// addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
