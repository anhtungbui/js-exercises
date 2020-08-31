/*
source: edabit - very easy
https://edabit.com/challenge/654ABGmNS5GqscE8C

Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. 
This is calculated by subtracting the number of downvotes from upvotes.

** Examples

getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

*/
const voteData = {
  upvotes: 13,
  downvotes: 0,
};

// MY SOLUTION
function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

// 2ND SOLUTION
function getVoteCount2(votes) {
  const { upvotes, downvotes } = votes;
  return upvotes - downvotes;
}

// 3RD SOLUTION
function getVoteCount3(votes) {
  for (let prop in votes) {
    console.log(prop, votes[prop]);
  }
}

// TEST CASES
console.log(getVoteCount(voteData));
console.log(getVoteCount2(voteData));
getVoteCount3(voteData);
