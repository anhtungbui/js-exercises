/*
Unlucky 13
source: edabit - very easy
https://edabit.com/challenge/5232asan2yFuMGnHq

Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

** Examples

unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.
*/

function unlucky13(arr) {
  return arr.filter((num) => {
    return num % 13 != 0;
  });
}

// Test
console.log(unlucky13([53, 182, 435, 591, 637]));
