/*
State Names and Abbreviations
source: edabit - very easy;

Create a function that filters out an array of state names 
into two categories based on the second parameter.

Abbreviations abb
Full names full

** Examples
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
➞ ["CA", "NY"]

filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
➞ ["Arizona", "Nevada"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
➞ ["MT", "NJ", "TX", "ID", "IL"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
➞ []
*/

// MY SOLUTION
const filterStateNames = (stateName, type) => {
    if (type === 'abb') {
        return stateName.filter(item => item.length === 2);
    } else if (type === 'full') {
        return stateName.filter(item => item.length > 2);
    }
}

// 2ND SOLUTION 
const filterStateNames = (stateName, type) => 
    stateName.filter(item => type === 'abb' ? item.length === 2 : item.length > 2);


// TEST CASES
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));