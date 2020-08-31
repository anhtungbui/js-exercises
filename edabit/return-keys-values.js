/*
Return the Objects Keys and Values
source: edabit - medium
https://edabit.com/challenge/AP4hnF97anRc2mAZ6

Create a function that takes an object and returns the keys and values as separate arrays.

Examples

keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
*/

const obj = { a: 'Apple', b: 'Microsoft', c: 'Google' };

// My Solution
function keysAndValues(obj) {
  let result = [];

  result.push(Object.keys(obj));
  result.push(Object.values(obj));

  return result;
}

// Test cases
console.log(keysAndValues(obj));

// Improved Solution
function keysAndValuesV2(obj) {
  return [Object.keys(obj), Object.values(obj)];
}

// Test cases
console.log(keysAndValuesV2(obj));

// saved Solution 3
function keysAndValuesV3(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map((key) => obj[key])];
}

// saved Solution 4
function keysAndValuesV4(obj) {
  var k = [];
  var o = [];
  for (var i in obj) {
    k.push(i);
    o.push(obj[i]);
  }
  return [k, o];
}
