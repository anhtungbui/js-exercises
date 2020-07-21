/*
Printer Levels
source: edabit - easy
https://edabit.com/challenge/QXWM2oo7rQNiyDsip

Given an object of how many more pages each ink color can print, 
output the maximum number of pages the printer can print 
before any of the colors run out.

** Examples
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0

** Notes
A single printed page requires each color once, so printing is not possible 
if any of the slots lack ink (see example #3). 
*/

// MY SOLUTION
function inkLevels(cartridge) {
  return Math.min(cartridge.cyan, cartridge.magenta, cartridge.yellow);
}

// 2ND SOLUTION
const inkLevels = (inks) => Math.min(...Object.values(inks));

// TEST CASES
console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
);
