/*
Conditional Algorithms

1. Los or New?

Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.
2. isDivisible?

Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true.
3. Missing Angle

Create a function named "missingAngle" which classifies the missing angle of a triangle as either acute, right or obtuse. Notes: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90° (but less than 180°).
Examples:
11°, 20° should return "obtuse", since the missing angle would be 149°
27°, 59° ➞ The third angle is 92° so it is "obtuse"
135°, 11° ➞ The third angle is "acute"
45°, 45° ➞ The third angle is a "right angle"
4. What's the weather?

Use a ternary operator to complete this task. Create a function named "isRaining". If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".
Loops

1. Sequence

Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string.
2. Multiples

Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. Concatenate each value to a string and return a string.
Math

1. You've got the power

Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
Examples:
  powerOf(3) //27
  powerOf(4) //256
Problem Solving

1. How many?

Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
Examples:
vowelCount("hello") // 2
vowelCount("test") // 1
vowelCount("fbw") // 0
*/

// Answer Sheet
const nameOfCity = (str) => {
  let strBegin = str.slice(0, 3);

  if (
    strBegin === 'Los' ||
    strBegin === 'los' ||
    strBegin === 'New' ||
    strBegin === 'new'
  ) {
    return true;
  } else {
    return false;
  }
};

const isDivisible = (num) => num % 100 === 0;

const missingAngle = (a, b) => {
  let missingAngle = 180 - a - b;

  if (missingAngle < 90) {
    return 'acute';
  } else if (missingAngle === 90) {
    return 'right angle';
  } else {
    return 'obtuse';
  }
};

const isRaining = (weather) => {
  return weather
    ? 'wet day - you need an umbrella!'
    : 'dry day - leave your umbrella at home!';
};

const geometricalSequence = () => {
  let num = 1;
  let result = [num];

  for (let i = 0; i < 8; i++) {
    num += num;
    result.push(num);
  }

  return result.join(' ');
};

const multiplesOfThree = () => {
  let num = 3;
  let result = [num];

  for (let i = 0; i < 4; i++) {
    num += 3;
    result.push(num);
  }

  return result.join(' ');
};

const powerOf = (num) => Math.pow(num, num);

const vowelCount = (str) => {
  let vowelCount = 0;
  let lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (
      lowerCaseStr[i] === 'u' ||
      lowerCaseStr[i] === 'e' ||
      lowerCaseStr[i] === 'o' ||
      lowerCaseStr[i] === 'a' ||
      lowerCaseStr[i] === 'i'
    ) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};
