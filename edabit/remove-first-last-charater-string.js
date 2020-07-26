/*
Remove the First and Last Characters
source: edabit - very easy

Create a function that removes the first and last characters from a string.

** Examples
removeFirstLast("hello") ➞ "ell"

removeFirstLast("maybe") ➞ "ayb"

removeFirstLast("benefit") ➞ "enefi"

removeFirstLast("a") ➞ "a"

** Notes
If the string is 2 or fewer characters long, return the string itself (See Example #4).
*/

// MY SOLUTION
const removeFirstLast = str => {
    if (str.length <= 2) return str;
    else return str.slice(1,-1);    
}

// TEST CASES
console.log(removeFirstLast("hello"));
console.log(removeFirstLast("maybe"));
console.log(removeFirstLast("benefit"));
console.log(removeFirstLast("a"));
