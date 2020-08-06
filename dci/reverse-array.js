/**
 * Reverse an array (reverse elements' orders)
 */

// My 1st Solution
const arr1 = [4, -1, 3, 8, -2, -10];

const arr2 = ['Anton', 'Glenn', 'Mikha', 2, 10];

const reversedArr = (arr) => arr2.reverse();

// Test
console.log(reversedArr(arr2));

// My 2nd Solution
const reversedArr2 = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.unshift(element);
  });

  return newArr;
};

// Test
// console.log(reversedArr2(arr1));
