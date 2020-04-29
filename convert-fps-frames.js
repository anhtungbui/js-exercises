/*
Frames Per Second
source: edabit - very easy
Create a function that returns the number of frames shown 
in a given number of minutes for a certain FPS.

** Examples
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000

** Notes
FPS stands for "frames per second" and it's the number of frames 
a computer screen shows every second.
Assume the screen produces 60 frames every second.
*/

// MY SOLUTION
const frames = (minutes, fps) => (minutes * 60) * fps;

// TEST CASES
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));