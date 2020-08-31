/*
Get Sum of People's Budget
source: edabit - medium
https://edabit.com/challenge/tmnCStcrkdWbreKP5

Create the function that takes an array with objects and returns the sum of people's budgets.

** Examples

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600
*/

const budgets = [
  { name: 'John', age: 21, budget: 23000 },
  { name: 'Steve', age: 32, budget: 40000 },
  { name: 'Martin', age: 16, budget: 2700 },
];

// My Solution
function getBudgets(budgets) {
  let sum = 0;

  budgets.forEach((person) => {
    sum += person.budget;
  });

  return sum;
}

// Test
console.log(getBudgets(budgets));

// My Solution 2
function getBudgetsV2(budgets) {
  return budgets.reduce((total, person) => total + person.budget, 0);
}

// Test
console.log(getBudgetsV2(budgets));
