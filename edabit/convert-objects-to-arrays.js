/*
Convert Key, Values in an Object to Array
source: edabit - very easy
https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

Write a function that converts an object into an array of keys and values.

** Examples

objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

*/

// My Solution
const obj = {
  D: 1,
  B: 2,
  C: 3,
};

function objectToArray(obj) {
  return Object.entries(obj);
}

// Test cases
console.log(objectToArray(obj));

// saved Solution 2
function objectToArrayV2(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}

// saved Solution 3
function objectToArrayV3(obj) {
  var r = [];
  for (var i in obj) {
    r.push([i, obj[i]]);
  }
  return r;
}
