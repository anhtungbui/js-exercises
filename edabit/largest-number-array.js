/*
Find the Largest Number in an Array
source: edabit - very easy
https://edabit.com/challenge/HTbRYCmPwfZGnBcxW

Create a function that takes an array of numbers. Return the largest number in the array.

** Examples
findLargestNum([4, 5, 1, 3]) ➞ 5

findLargestNum([300, 200, 600, 150]) ➞ 600

findLargestNum([1000, 1001, 857, 1]) ➞ 1001

** Notes
Expect either a positive number or zero (there are no negative numbers).
*/

// MY 1ST SOLUTION
const findLargestNum = arr => Math.max(...arr);

// 2ND SOLUTION
const findLargestNum = arr => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i+1])  max = arr[i+1];
    }
    return max;
}

// 3RD SOLUTION (save it for later)
const findLargestNum = arr => arr.sort((a, b) => b - a)[0];

// 4TH SOLUTION (save it for later)
const findLargestNum = arr => arr.sort((a,b) => a - b).pop();

// 5TH SOLUTION  (save it for later)
const findLargestNum = arr => Math.max.apply(Math, arr);
 
// TEST CASES
console.log(findLargestNum([0, -2, 88])); // -> 88
console.log(findLargestNum([4, 5, 1, 3])); // -> 5
console.log(findLargestNum([1000, 1001, 857, 1])); // -> 1001
console.log(findLargestNum([-2, -6, -10, -1])); // -> -1


