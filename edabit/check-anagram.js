/*
Check for Anagrams
source: edabit - medium
https://edabit.com/challenge/FPamWj3Ky7ep9ApBz

Create a function that takes two strings and returns either true or false 
depending on whether they're anagrams or not.

** Examples
isAnagram("cristian", "Cristina") ➞ true

isAnagram("Dave Barry", "Ray Adverb") ➞ true

isAnagram("Nope", "Note") ➞ false

**Notes
Should be case insensitive.
*/

// MY SOLUTION
const isAnagram = (str1, str2) => {
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();
    if (s1.length === s2.length) {
        for (let i = 0; i < s1.length; i++) {
            if (s2.indexOf(s1[i]) === -1) {
                return false;          
            } else if (i === s1.length - 1)
                return true;
        }
    } else 
        return false;       
}

// saved 2ND SOLUTION
function isAnagram(s1, s2) {
    var str1 = s1.toLowerCase().split('').sort().join('').trim();
    var str2 = s2.toLowerCase().split('').sort().join('').trim();
    return str1===str2;
}


// TEST CASES
console.log(isAnagram("cristian", "Cristina"));
console.log(isAnagram("Dave Barry", "Ray Adverb"));
console.log(isAnagram("Nope", "oNte"));