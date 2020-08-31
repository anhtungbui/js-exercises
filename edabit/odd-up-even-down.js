/*
Odd Up, Even Down
source: edabit - very easy
https://edabit.com/challenge/dWNPtNeQgyn6mS8FA

Create a function that goes through the array, incrementing (+1) for each odd number 
and decrementing (-1) for each even number.

** Examples

transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]

transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]

transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]

*/
const arr = [1, 2, 3, 4, 5];

// My Solution
function transform(arr) {
  let result = [];

  arr.forEach((num) => {
    if (num % 2 === 0) {
      num--;
    } else {
      num++;
    }
    result.push(num);
  });

  return result;
}

// Test
console.log(transform(arr));

// Solution 2
function transformV2(arr) {
  return arr.map((num) => {
    return num % 2 === 0 ? num - 1 : num + 1;
  });
}

// Test
console.log(transformV2(arr));
