/*
Get the File Name
source: edabit - very easy
https://edabit.com/challenge/mN98zKeSSLnXwKz8C

Create a function that returns the selected filename from a path. Include the extension in your answer.

** Examples

getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

getFilename("ffprobe.exe") ➞ "ffprobe.exe"
*/
const filePath = 'C:/Projects/pil_tests/ascii/edabit.txt';
const filePath2 = 'ffprobe.exe';
const filePath3 = 'C:/Users/johnsmith/Music/Beethoven_5.mp3';

// My Solution
function getFilename(filePath) {
  // Check whether there is a / in the file path
  if (filePath.indexOf('/') === -1) {
    return filePath;
  } else {
    let fileName = '';

    // Looping backwardly from the end of the file path
    // Until we can reach the first slash
    for (let i = filePath.length - 1; i > -1; i--) {
      fileName += filePath[i];
      if (filePath[i] === '/') break;
    }

    // Convert this backward fileName into an array and reverse it
    let result = Array.from(fileName);
    result.reverse();

    // Remove the / at the beginning
    result.shift();

    // And finally join them as a string
    return result.join('');
  }
}

// Test cases
console.log(getFilename(filePath));
console.log(getFilename(filePath2));
console.log(getFilename(filePath3));

// saved Solution 2
function getFilenameV2(path) {
  return path.match(/[^/]+$/)[0];
}

// saved Solution 3
function getFilenameV3(path) {
  return path.split('/').pop();
}

// saved Solution 4
const getFilename = (p) => p.split('/').slice(-1)[0];
