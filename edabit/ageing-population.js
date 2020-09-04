/*
Ageing the Population...
source: edabit - medium
https://edabit.com/challenge/xtDkfWxEh2hbmAHvn

Given an object of people and their ages, return how old the people would be 
after n years have passed. Use the absolute value of n.

** Examples

afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1) ➞ {
  "Joel" : 33,
  "Fred" : 45,
  "Reginald" : 66,
  "Susan" : 34,
  "Julian" : 14
}

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) ➞ {
  "Baby" : 21,
  "Child" : 27,
  "Teenager" : 34,
  "Adult" : 44,
  "Elderly" : 90
}
*/

const people = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};

// My Solution
function afterNYears(people, n) {
  for (const prop in people) {
    people[prop] += Math.abs(n);
  }

  return people;
}

console.log(afterNYears(people, 2));
