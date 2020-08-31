/*
Similar Bread
source: edabit - very easy

Given two arrays, which represent two sandwiches, return whether both sandwiches 
use the same type of bread. The bread will always be found at the start and end of the array.

** Examples

hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) ➞ true

hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
) ➞ false

hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "chee
*/

// My Solution
function hasSameBread(bread1, bread2) {
  return bread1[0] === bread2[0] && bread1[2] === bread2[2];
}

// Test
console.log(
  hasSameBread(
    ['white bread', 'lettuce', 'white bread'],
    ['white bread', 'tomato', 'white bread']
  )
);
