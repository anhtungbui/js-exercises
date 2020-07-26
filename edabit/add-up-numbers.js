/*
Add up the Numbers from a Single Number
source: edabit - very easy
https://edabit.com/challenge/4gzDuDkompAqujpRi

Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

** Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300

** Notes
Expect any positive number between 1 and 1000.
*/

// MY SOLUTION
const addUp = (num) => {
    if (num === 1) {
        return 1;
    } else {
        return num + addUp(num - 1);
    }
};

// saved 2ND SOLUTION
function addUp(num) {
    return (num * (num + 1)) / 2;
}

// saved 3RD SOLUTION
function addUp(num) {
    var total = 0;
    for (var i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

// TEST CASES
console.log(addUp(4));
console.log(addUp(600));
