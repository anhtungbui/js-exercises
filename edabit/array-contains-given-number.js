/*
Check if an Array Contains a Given Number
source: edabit - very easy
https://edabit.com/challenge/SwyjHvkqwwQ2iJsoS

Write a function to check if an array contains a particular number.

** Examples
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false
*/

// MY SOLUTION
// const check = (arr, num) => arr.includes(num);

// 2ND SOLUTION (using indexOf() method)
const check = (arr, num) => arr.indexOf(num) !== -1;

// 3RD SOLUTION (using linear search)

// TEST CASES
console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));
