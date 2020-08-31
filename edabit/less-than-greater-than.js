/*
Less Than, Greater Than
source: edabit - very easy
https://edabit.com/challenge/FvXHdrhjLaof47Qt3

Create a function that takes two numbers num1, num2, and an array arr 
and returns an array containing all the numbers in arr greater than num1 and less than num2.

** Examples

arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

arrBetween(7, 32, [1, 2, 3, 78]) ➞ []
*/

const arr1 = [1, 5, 95, 0, 4, 7];

// My Solution
function arrBetween(num1, num2, arr) {
  return arr.filter((value) => value > num1 && value < num2);
}

// Test
console.log(arrBetween(3, 8, arr1));
