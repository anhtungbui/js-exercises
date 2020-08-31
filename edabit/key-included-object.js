/*
Does the Object Contain a Given Key?
source: edabit - very easy 
https://edabit.com/challenge/jJS3yokQmu4etN5qs

Write a function that returns true if a hash contains the specified key, and false otherwise.

** Examples

hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

*/

// My Solution
function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
}

// Test
console.log(hasKey({ a: 44, b: 45, c: 46 }, 'd'));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, 'not'));

// saved Solution 2
function hasKeyV2(obj, key) {
  return key in obj;
}
