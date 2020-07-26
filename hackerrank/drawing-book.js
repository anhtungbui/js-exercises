/*
Drawing Book
source: hackerrank - easy
https://www.hackerrank.com/challenges/drawing-book/problem

Brie’s Drawing teacher asks her class to open their books to a page number. 
Brie can either start turning pages from the front of the book or from the back of the book. 
She always turns pages one at a time. When she opens the book, page  is always on the right side:

When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be printed 
on both sides. The last page may only be printed on the front, given the length of the book. 
If the book is n pages long, and she wants to turn to page p, 
what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.

** Function Description
Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn.

pageCount has the following parameter(s):

n: the number of pages in the book
p: the page number to turn to

*/

// MY SOLUTION
const pageCount = (n, p) => {    
    if (p <= n/2) {                     // If starting at the beginning is optimum         
        if (p % 2 !== 0) {  
            return (p - 1)/2            // Case 1:When p is odd
        } else return p/2               // Case 2: When p is even
    } else {                            // If starting at the end is optimum
        if (p % 2 !== 0) {
            if (n % 2 !== 0) {
                return (n - p)/2;       // Case 3: When p is odd, n is odd
            } else {
                return (n - p + 1)/2;   // Case 4: When p is odd, n is even
            }
        } else {
            if (n % 2 !== 0) {
                return (n - p - 1)/2;   // Case 5: When p is even, n is odd
            } else {
                return (n - p)/2;       // Case 6:When p is even, n is even
            }
        }
    }
}

// TEST CASES
console.log(pageCount(6, 2)); // -> 1
console.log(pageCount(5, 4)); // -> 0
console.log(pageCount(37455, 29835));   // -> 3810