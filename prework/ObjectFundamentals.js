// * Week 4 - Tasks from https://javascript.info/object#tasks

//  #1. Hello, object
/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user); // should only have surname property

//  #2. Check for emptiness
/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
  if (Object.getOwnPropertyNames(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

//  #3. Sum object properties
/*
We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0

*/

function sumOfSalaries(salaries) {
  let sum = 0;
  for (let property in salaries) {
    sum += salaries[property];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let emptySalaries = {};

console.log(sumOfSalaries(salaries)); // 390
console.log(sumOfSalaries(emptySalaries)); // 0

//  #4. Multiply numeric property values by 2
/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.

*/

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
console.log(menu);
