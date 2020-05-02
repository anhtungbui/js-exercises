/*
The Full Length of A Google
source: edabit - very easy
https://edabit.com/challenge/cWHToCQaAbnzNJzQw

Google's logo can be stretched depending on how many pages it lets you skip forward to.
Let's say we wanted to change the amount of pages that Google could skip to. Create a function where given a number of pages n, return the word 'Google' but with the correct number of "o"s.

** Examples
googlify(10) ➞ "Goooooooooogle"

googlify(23) ➞ "Gooooooooooooooooooooooooogle"

googlify(2) ➞ "Google"

googlify(-2) ➞ "invalid"

** Notes
If n is equal to or less than 1, return invalid.
*/

// MY SOLUTION
const googlify = n => {
    if (n <= 1) return 'invalid';
    else {
        let characterO = [];
        for (let counter = 0; counter < n; counter++) {
            characterO.push('o');
        }
        return `G${characterO.join('')}gle`;
    }
}

// 2ND SOLUTION (saved for later)
function googlify(n) {
	return n > 1 ? 'G'+'o'.repeat(n)+'gle' : 'invalid' ;
}

// TEST CASES
console.log(googlify(5));
