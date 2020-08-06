/** Check prime number
 *
 * Prime is a natural number which is:
 * Larger than 1
 * Is only divisible by itself
 */

// My Solution

function checkPrime(num) {
  if (num > 1) {
    if (num === 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i != 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return false;
}

// Test
console.log(checkPrime(4)); // Output: false
console.log(checkPrime(11)); // Output: true

// saved 2nd Solution
// if (isPrime(number)) {
//   console.log('The number is Prime');
// } else {
//   console.log('The number is not Prime');
// }

// function isPrime(num) {
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// }
