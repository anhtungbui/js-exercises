/*
Count the Syllables
source: edabit - very easy

Create a function that returns the number of syllables in a simple string. 
The string is made up of short repeated words like "Lalalalalalala" 
(which would have 7 syllables).

** Examples
countSyllables("Hehehehehehe") ➞ 6

countSyllables("bobobobobobobobo") ➞ 8

countSyllables("NANANA") ➞ 3

** Notes
Your code should accept strings of any case (upper, lower and mixed case).
*/

// MY SOLUTION (but won't work with unregulated string)
const countSyllables = str => str.length / 2;

// 2ND SOLUTION *research (using regular expression)
const countSyllables = str => str.match(/[aeiou]/gi).length;

// TEST CASES
console.log(countSyllables("Hehehehehehe"));
console.log(countSyllables("bobobobobobobobo"));
console.log(countSyllables("NANANA"));
