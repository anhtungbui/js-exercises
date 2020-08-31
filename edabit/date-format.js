/*
Date Format
source: edabit - very easy
https://edabit.com/challenge/NEPFa3NZSd8iiF3ps

Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

** Examples

formatDate("11/12/2019") ➞ "20191211"

formatDate("12/31/2019") ➞ "20193112"

formatDate("01/15/2019") ➞ "20191501"
*/

// My Solution
function formatDate(str) {
  const mm = str.slice(0, 2);
  const dd = str.slice(3, 5);
  const yyyy = str.slice(6);

  return yyyy + dd + mm;
}

// Test
console.log(formatDate('11/12/2019'));

// saved Solution 2
const formatDateV2 = (date) => {
  const [m, d, y] = date.split('/');
  return y + d + m;
};
