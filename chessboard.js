/* 
CHESSBOARD
source: Eloquent JavaScript by M. Haverbecke - Chapter 2.

Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid 
there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/
// function chessboard() {
//     for (let height = 1; height < 9; height++) {
//         if (height % 2 !== 0) {
//             console.log(' # # # #');
//         }
//         else {
//             console.log('# # # # ');
//         } 
//     }
//   }
//   chessboard();

/*
When you have a program that generates this pattern, 
define a binding size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.
*/

function chessboard(size) {
    for (let height = 1; height < size+1; height++) { 
        let row = [];
        if (height % 2 !== 0) { // ODD ROWS
            printOddRow(size);
        } else { // EVEN ROWS
           printEvenRow(size);
        }         
    }
  }
  
function printOddRow(width) { // ODD ROWS
    let row = [];
    if (width % 2 == 0) { // EVEN CELLS 
        for (let i = 1; i < (width)/2+1; i++) {
            row.push('-');          
        }
        console.log(row.join('#') + '#');
    } else {
        if (width % 2 !== 0) { // ODD CELLS 
            for (let i = 1; i < (width)/2+1; i++) {
                row.push('-');          
            }
            console.log(row.join('#'));
        }
    }
}

function printEvenRow(width) { // EVEN ROWS
    let row = [];
    if (width % 2 == 0) { // EVEN CELLS
        for (let i = 1; i < (width/2)+1; i++) {
            row.push('#');          
        }             
        console.log(row.join('-') + '-');
    }
    else {
        if (width % 2 !== 0) { // ODD CELLS 
            for (let i = 1; i < (width/2)+1; i++) {
                row.push('#');          
            }             
            console.log(row.join('-'));
        }
    }
}

// TEST CASES
chessboard(8);

