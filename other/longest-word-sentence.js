/*
Find the longest word
source: freecodecamp

**  Algorithm Challenge
Return the length of the longest word in the provided sentence.

Your response should be a number.

** Examples
findLongestWord(“The quick brown fox jumped over the lazy dog”) // -> 6
findLongestWord(“May the force be with you”) // -> 5
findLongestWord(“Google do a barrel roll”) // -> 6
findLongestWord(“What is the average airspeed velocity of an unladen swallow”) // -> 8
findLongestWord(“What if we try a super-long word such as otorhinolaryngology”) // -> 19

** Note
https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/
*/

// MY SOLUTION
const findLongestWord = str => {
    let splitStr = str.split(' ');
    let lengthArr = splitStr.map(item => item.length);
    let max = lengthArr[0];
    for (let i = 0; i < lengthArr.length; i++) {
        if (max < lengthArr[i+1]) {
            max = lengthArr[i+1];
        }
    }
    return max;
}

// 2ND SOLUTION
const findLongestWord = str => {
    let splitStr = str.split(' ');
    let lengthArr = splitStr.map(item => item.length);
    lengthArr.sort((a, b) => b - a);
    return lengthArr[0];
}

// saved 3RD SOLUTION (using the Reduce() method)

// TEST CASES
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('What if we try a super-long word such as otorhinolaryngology'));