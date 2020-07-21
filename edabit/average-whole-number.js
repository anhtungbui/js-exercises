/*
Is the Average of All Elements a Whole Number?
source: edabit - easy
https://edabit.com/challenge/arzsQcGsstJxHAnGi

Create a function that takes an array as an argument
and returns true or false depending on whether 
the average of all elements in the array is a whole number or not.

** Examples
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false
*/

// MY SOLUTION
function isAvgWhole(arr) {
    // Calculate the sum of all the elements
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    // Calculate the avg and verify whether it is a whole number
    let avg = sum / (arr.length);
    if (Number.isInteger(avg)) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));