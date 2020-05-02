/*
Convert Kilometers to Miles
source: edabit - very easy

In this challenge, you have to implement a function 
that returns the given distance kilometers converted into miles. 
You have to round the result up to the fifth decimal digit.

** Examples
kmtomiles(2) ➞ 1.24274

kmtomiles(6) ➞ 3.72823

kmtomiles(8) ➞ 4.97097

** Notes
mi = km * 0.621371
*/

// MY SOLUTION
const kmtomiles = kilometers => Math.floor(kilometers * 0.621371 * 100000) / 1000000;

// 2ND SOLUTION
const kmtomiles = kilometers => (kilometers*0.621371).toPrecision(6);

// 3RD SOLUTION 
const kmtomiles = kilometers => parseFloat((kilometers * 0.621371).toFixed(5))

// TEST CASES
console.log(kmtomiles(2));
console.log(kmtomiles(6));
console.log(kmtomiles(8));