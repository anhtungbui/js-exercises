/*
Create a function that returns true if a string contains any spaces.
source: edabit - very easy

** Examples
hasSpaces("hello") ➞ false

hasSpaces("hello, world") ➞ true

hasSpaces(" ") ➞ true

hasSpaces("") ➞ false

hasSpaces(",./!@#") ➞ false

** Notes
An empty string does not contain any spaces.
Try doing this without RegEx.
*/

// 1st attempt 
const hasSpaces = str => {
    if (str.indexOf(' ') !== -1)  return true;
    else return false;
}
console.log(hasSpaces('hello'));
console.log(hasSpaces('hello, world'));
console.log(hasSpaces(''));

// 2nd attempt (without RegEx)
const hasSpaces2 = str =>  str.includes(' ');
    
console.log(hasSpaces2('hello'));
console.log(hasSpaces2('hello, world'));
console.log(hasSpaces2(''));
