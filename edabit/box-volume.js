/*
Volume of a Box
source: edabit - very easy
https://edabit.com/challenge/ms3q5GYSpFpwxeFWX

Create a function that takes an object argument sizes 
(contains width, length, height keys) and returns the volume of the box.

** Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

** Notes
Don't forget to return the result.
Remember that the values are in an object.
Volume is length * width * height.
*/

// MY SOLUTION
function volumeOfBox(sizes) {
  return sizes.width * sizes.length * sizes.height;
}

// TEST CASES
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
