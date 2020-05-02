/*
Multiple of 100
source: edabit - very easy
https://edabit.com/challenge/qMr6wYGr6NaXAPQGF

Create a function that takes an integer and returns true 
if it's divisible by 100, otherwise return false.

** Examples
divisible(1) ➞ false

divisible(1000) ➞ true

divisible(100) ➞ true
*/

// MY SOLUTION
const divisibleBy100 = num => num % 100 == 0; 

// saved 2ND SOLUTION
function divisibleBy100(num) {
	return !(num % 100)
}

// TEST CASES
console.log(divisibleBy100(1));
console.log(divisibleBy100(1000));
console.log(divisibleBy100(100));
