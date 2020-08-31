/*
Check if Number is within a Given Range
source: edabit - very easy 
https://edabit.com/challenge/Wp8uSyh2tfpdzR4CP

Given a number and an object with min and max properties, 
return true if the number lies within the given range (inclusive).

** Examples

isInRange(4, { min: 0, max: 5 }) ➞ true

isInRange(4, { min: 4, max: 5 }) ➞ true

isInRange(4, { min: 6, max: 10 }) ➞ false

isInRange(5, { min: 5, max: 5 }) ➞ true

*/

// My Solution
function isInRange(value, range) {
  return value >= range.min && value <= range.max;
}

// Test cases
console.log(isInRange(4, { min: 0, max: 5 }));
console.log(isInRange(4, { min: 6, max: 10 }));
