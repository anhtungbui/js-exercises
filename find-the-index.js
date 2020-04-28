/*
Find the Index
source: edabit - very easy

Create a function that finds the index of a given item.

** Examples
search([1, 5, 3], 5) ➞ 1
search([9, 8, 3], 3) ➞ 2
search([1, 2, 3], 4) ➞ -1
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
findIndex(["a", "g", "y", "d"], "d") ➞ 3
findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

** Notes
If the item is not present, return -1.
*/

// MY SOLUTION
const findIndex = (arr, item) => arr.indexOf(item);

// 2ND SOLUTION (using linear search algorithm)


// TEST CASES
console.log(findIndex([1, 5, 3], 5));
console.log(findIndex([9, 8, 3], 3));
console.log(findIndex([1, 2, 3], 4));
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));