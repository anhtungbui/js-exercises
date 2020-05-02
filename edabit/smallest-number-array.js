/*
Find the Smallest Number in an Array
source: edabit - very easy

Create a function that takes an array of numbers and returns the smallest number in the set.

** Examples
findSmallestNum([34, 15, 88, 2]) ➞ 2

findSmallestNum([34, -345, -1, 100]) ➞ -345

findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999

findSmallestNum([7, 7, 7]) ➞ 7

** Notes
Test cases contain decimals. 
*/

// MY SOLUTION
const findSmallestNum = arr => arr.sort((a, b) => a - b)[0]; 

// 2ND SOLUTION
const findSmallestNum = arr => Math.min(...arr);

// TEST CASES
console.log(findSmallestNum([34, 15, 88, 2]));
console.log(findSmallestNum([34, -345, -1, 100]));
console.log(findSmallestNum([-76, 1.345, 1, 0]));
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));
console.log(findSmallestNum([7, 7, 7]));