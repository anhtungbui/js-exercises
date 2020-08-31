/**
Spaces Between Each Character
source: edabit - very easy

Create a function that takes a string and returns a string with spaces in between all of the characters.

** Examples

spaceMeOut("space") ➞ "s p a c e"

spaceMeOut("far out") ➞ "f a r  o u t"

spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k" 

*/

const str1 = 'space';
const str2 = 'elongated musk';

// My Solution
function spaceMeOut(str) {
  const arr = str.split('');
  return arr.join(' ');
}

// Test
console.log(spaceMeOut(str1));
console.log(spaceMeOut(str2));
