/*
Write a function that takes an integer and:

If the number is a multiple of 3, return "Hello".
If the number is a multiple of 5, return "World".
If the number is a multiple of both 3 and 5, return "Hello World".

*/
const helloWorld = num => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'Hello World';
    } else if (num % 3 === 0) {
        return 'Hello';
    } else if (num % 5 === 0) {
        return 'World';
    }    
}
console.log(helloWorld(3)); 
console.log(helloWorld(5));
console.log(helloWorld(15));

// Using nested ternary expression
const helloWorld2 = num => 
num % 3 === 0 && num % 5 === 0 ? 'Hello World' 
: num % 3 === 0 ? 'Hello' 
: 'World'; 

console.log(helloWorld2(3)); // -> Hello
console.log(helloWorld2(5)); // -> World
console.log(helloWorld2(15)); // -> Hello World