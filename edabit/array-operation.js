/*
Array Operation
source: edabit - easy
https://edabit.com/challenge/NFfYCBEQepsD5mfEk

Create a function that takes three parameters and 
returns an array with the first parameter x, 
the second parameter y, and every number in between 
the first and second parameter in ascending order. 
Then filter through the array and return the array 
with numbers that are only divisible by 
the third parameter n.

** Examples
arrayOperation(1, 10, 3) ➞ [3, 6, 9]

arrayOperation(7, 9, 2) ➞ [8]

arrayOperation(15, 20, 7) ➞ []

** Notes
The final array should consist of all numbers between x and y inclusive that are divisible by n.
Return an empty array if there are no numbers that are divisible by n.
 */

// MY SOLUTION
function arrayOperation(...arr) {
    let inBetweenNum = arr[0];
    let inBetweenArr = [];

    // Generate in between numbers
    for (let i = arr[0]; i <= arr[1]; i++) {
        inBetweenArr.push(inBetweenNum);
        inBetweenNum++;
    }

    // Filter the final array
    let result = inBetweenArr.filter(num => num % arr[2] === 0);
    return result;
}

// TEST CASES
console.log(arrayOperation(1, 10, 3));
// Output: 3, 6, 9

console.log(arrayOperation(7, 9, 2));
// Output: 8

console.log(arrayOperation(10, 50, 10)); 
// Output: 10, 20, 30, 40, 50

// saved 2ND SOLUTION
function arrayOperation(x, y, n) {
	var r = [];
  for (var i = x; i <= y; i++) {
		if (i % n == 0) r.push(i);
	}
  return r;
}

// saved 3RD SOLUTION
const arrayOperation = (x, y, n) =>
	Array.from({length: y-x+1}, (_, i) => x+i).filter(v => !(v%n));