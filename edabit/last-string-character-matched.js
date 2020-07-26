/*
Is the Last Character an N?
source: edabit - very easy

Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

** Examples
isLastCharacterN("Aiden") ➞ true

isLastCharacterN("Piet") ➞ false

isLastCharacterN("Bert") ➞ false

isLastCharacterN("Dean") ➞ true

** Notes
The function must return a boolean value ( i.e. true or false).
*/

// MY SOLUTION
const isLastCharacterN = word => word[word.length-1] === 'n';

// 2ND SOLUTION
const isLastCharacterN = word => word.endsWith('n');

// saved 3RD SOLUTION (using regular expression)
function isLastCharacterN(word) {
	return /n$/.test(word);
}

// saved 4TH SOLUTION (using subString() method) 
function isLastCharacterN(word) {
	return word.substr(-1) == "n";
}

// saved 5TH Solution (using chartAt() method)
const isLastCharacterN = word => word.charAt(word.length - 1) == 'n';

// saved 6TH SOLUTION (using rest parameter)
const isLastCharacterN = word => [...word].pop() == "n";


// TEST CASES
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));