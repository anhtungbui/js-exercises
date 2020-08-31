/*
Array of Consecutive Numbers
source: edabit - very easy

Implement a function that returns an array containing all the consecutive numbers 
in ascendant order from the given value low up to the given value high (bounds included).

** Examples

getSequence(1, 5) ➞ [1, 2, 3, 4, 5]

getSequence(98, 100) ➞ [98, 99, 100]

getSequence(1000, 1000) ➞ [1000]
*/

// My Solution
function getSequence(low, high) {
  if (low === high) {
    return [low];
  } else {
    let result = [low];
    let nextNum = low;

    for (let i = 0; i < high - low; i++) {
      nextNum++;
      result.push(nextNum);
    }

    return result;
  }
}

// Test
console.log(getSequence(1, 5));

// saved Solution 2
const getSequenceV2 = (low, high) =>
  Array.from({ length: high - low + 1 }, (_, i) => low + i);

// saved Solution 3
function getSequenceV3(low, high) {
  let arr = [];
  for (i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr;
}
