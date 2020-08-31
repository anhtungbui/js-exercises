/*
Scrabble Hand
source: edabit - very easy
https://edabit.com/challenge/i6YqzHcSiPiEQKjeX

Given an array of scrabble tiles, create a function that outputs the maximum possible score 
a player can achieve by summing up the total number of points for all the tiles in their hand. 
Each hand contains 7 scrabble tiles.

Here's an example hand:

[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
*/

const tileHand = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
  { tile: 'E', score: 1 },
];

// My Solution
function maximumScore(tileHand) {
  let maxScore = 0;

  tileHand.forEach((data) => {
    maxScore += data.score;
  });

  return maxScore;
}

// Test cases
console.log(maximumScore(tileHand));

// saved Solution 2
function maximumScoreV2(tileHand) {
  return tileHand.reduce((p, c) => p + c.score, 0);
}

// saved Solution 3
const maximumScoreV3 = (object) =>
  object.map((a) => a.score).reduce((acc, num) => acc + num);
