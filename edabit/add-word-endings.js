/*
Word Endings
source: edabit - very easy

Create a function that adds a string ending to each member in an array.

** Examples
addEnding(["clever", "meek", "hurried", "nice"], "ly")
➞ ["cleverly", "meekly", "hurriedly", "nicely"]

addEnding(["new", "pander", "scoop"], "er")
➞ ["newer", "panderer", "scooper"]

addEnding(["bend", "sharpen", "mean"], "ing")
➞ ["bending", "sharpening", "meaning"]

**Notes
Don't forget to return the result.
*/

// MY SOLUTION
const addEnding = (arr, ending) => arr.map(word => word.concat(ending));

// 2ND SOLUTION
const addEnding = (arr, ending) => arr.map(word => word + ending);

// 3RD SOLUTION
const addEnding = (arr, ending) => arr.map(word => `${word}${ending}`);

// TEST CASES
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
console.log(addEnding(["new", "pander", "scoop"], "er"));
console.log(addEnding(["bend", "sharpen", "mean"], "ing"));