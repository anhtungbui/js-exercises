/*
Basic Algorithm Scripting: Return Largest Numbers in Arrays
source: freecodecamp
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].

** Examples
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 
// -> [27, 5, 39, 1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) 
// -> [9, 35, 97, 1000000].
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) 
// -> [25, 48, 21, -3].

** Notes
https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/
*/

// MY SOLUTION
const largestOfFour = arr => {
    let sortedArr = arr.map(item => item.sort((a, b) => b - a));    // Sort each items in the array
    let largestNums = [];                                           
    sortedArr.forEach(item => largestNums.push(item[0]));           // Add the largest numbers to largestNums    
    return largestNums;
}

// saved 2ND SOLUTION

// TEST CASES
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
