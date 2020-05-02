/*
Is the String Empty?
source: edabit - very easy
https://edabit.com/challenge/EzbfiquDoAc2Zc9FL

Create a function that returns true if a string is empty and false otherwise.

** Examples
isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false

**Notes
A string containing only whitespaces " " does not count as empty.
*/

// MY SOLUTION
const isEmpty = str => str === '';

// 2ND SOLUTION (saved for later)
function isEmpty(s) {
	return !s
}

// TEST CASES
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));
