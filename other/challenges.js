let space = ' ';
let star = '*';

function makeATree() {
  console.log('v1.0');
  // The top part
  console.log(space.repeat(4) + star);
  console.log(space.repeat(3) + star.repeat(3));
  console.log(space.repeat(2) + star.repeat(5));
  console.log(space + star.repeat(7));
  console.log(star.repeat(9));
  // The bottom part
  console.log(space.repeat(3) + star.repeat(3));
  console.log(space.repeat(3) + star.repeat(3));
}
// makeATree();

// Note: height = the height of the top part of the tree
// Height should be equal or greater than 3 to make the tree look nice
// In Bülent's challenge, height = 5

function makeAmazingTree(height) {
  let numSpace = height - 1;
  let numStar = 1;
  console.log('v2.1');

  // The top part
  for (let i = 0; i < height; i++) {
    console.log(space.repeat(numSpace) + star.repeat(numStar));
    numSpace--;
    numStar += 2;
  }

  // The bottom part
  numStar = 3;
  numSpace = height - 2;
  for (let i = 0; i < 2; i++) {
    console.log(space.repeat(numSpace) + star.repeat(numStar));
  }
}

makeAmazingTree(10);
