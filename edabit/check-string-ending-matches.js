/*
Check if String Ending Matches Second String
source: edabit - very easy

Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

** Examples
checkEnding("abc", "bc") ➞ true

checkEnding("abc", "d") ➞ false

checkEnding("samurai", "zi") ➞ false

checkEnding("feminine", "nine") ➞ true

checkEnding("convention", "tio") ➞ false
** Notes
All test cases are valid one word strings.
 */

// MY SOLUTION
 const checkEnding = (str1, str2) => str1.endsWith(str2);
     
// TEST CASES 
 console.log(checkEnding("abc", "bc")); // -> true
 console.log(checkEnding("abc", "d")); // -> false
 console.log(checkEnding("samurai", "zi")); // -> false
 console.log(checkEnding("feminine", "nine")); // -> true
 console.log(checkEnding("convention", "tio")); // -> false