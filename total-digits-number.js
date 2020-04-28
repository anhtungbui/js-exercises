/*
Find the Total Number of Digits the Given Number Has
source: edabit - very easy

Create a function that takes a number as an argument and returns the amount of digits it has.

** Examples
findDigitAmount(123) ➞ 3

findDigitAmount(56) ➞ 2

findDigitAmount(7154) ➞ 4

findDigitAmount(61217311514) ➞ 11

findDigitAmount(0) ➞ 1
*/

// MY SOLUTION
const findDigitAmount = num => num.toString().length;

// 2ND SOLUTION (using String function)
const findDigitAmount = num => String(num).length;

// TEST CASES
console.log(findDigitAmount(123));
console.log(findDigitAmount(56));
console.log(findDigitAmount(7154));
console.log(findDigitAmount(61217311514));
console.log(findDigitAmount(0));