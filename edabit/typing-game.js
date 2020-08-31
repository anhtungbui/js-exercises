/*
Typing Game
source: edabit - very easy
https://edabit.com/challenge/KESyfS3A5vB2jkxFR

You're in the midst of creating a typing game.

Create a function that takes in two arrays: the array of user-typed words, 
and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) 
and -1s (incorrectly-typed words).

** Inputs:
User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

** Output: [1, 1, -1, -1, 1]

*/
const user = ['cat', 'blue', 'skt', 'umbrells', 'paddy'];
const correct = ['cat', 'blue', 'sky', 'umbrella', 'paddy'];

// My Solution
function correctStream(user, correct) {
  let result = [];

  for (let i = 0; i < user.length; i++) {
    user[i] === correct[i] ? result.push(1) : result.push(-1);
  }

  return result;
}

// Test
console.log(correctStream(user, correct));

// saved Solution 2
function correctStreamV2(user, correct) {
  return user.map((u) => (correct.indexOf(u) > -1 ? 1 : -1));
}
