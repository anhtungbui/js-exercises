const voteData = [
  {
    upvotes: 13,
    downvotes: 0,
  },
  {
    upvotes: 2,
    downvotes: 33,
  },
];

function getVoteCount(votes) {
  let result = [];
  // for (let vote of votes) {
  //   result.push(vote.upvotes - vote.downvotes);
  // }

  votes.forEach((vote) => {
    result.push(vote.upvotes - vote.downvotes);
  });
  console.log(result);
}

getVoteCount(voteData);
