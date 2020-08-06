/**
 * Sort an array of numbers
 */

const arr1 = [4, -1, 3, 8, -2, -10];
const arr2 = [1000000, 6, 789, 345, 2332, 56, 5];

// Solution 1
function sortNums(arr) {
  return arr.sort((a, b) => a - b);
}

// Test
console.log(sortNums(arr1));
console.log(sortNums(arr2));

// Descending order sort
function sortNumsDesc(arr) {
  return arr.sort((a, b) => b - a);
}

// Test
console.log(sortNumsDesc(arr1));
console.log(sortNumsDesc(arr2));
