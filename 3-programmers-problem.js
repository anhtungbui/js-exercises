/*
The 3 Programmers Problem
source: edabit - very easy 

You hired three programmers and you (hopefully) pay them. 
Create a function that takes three numbers (the hourly wages of each programmer) 
and returns the difference between the highest-paid programmer and the lowest-paid.

** Examples
programmers(147, 33, 526) ➞ 493

programmers(33, 72, 74) ➞ 41

programmers(1, 5, 9) ➞ 8
*/

// MY SOLUTION
const programmers = (one, two, three) => 
    Math.max(one, two, three) - Math.min(one, two, three);

// 2ND SOLUTION (using rest parameters)
//Won't work with arrow function expressions (?!)
function programmers(one, two, three) {
	return Math.max(...arguments) - Math.min(...arguments)
} 

// 3RD SOLUTION (using array sorting)
const programmers = (...salary) => {
    let salaryRanking = salary.sort((a, b) => a - b);
    return salaryRanking.pop() - salaryRanking.shift();
    // An alternative way using array indexing
    // return salaryRanking[salary.length-1] - salaryRanking[0];
}
    
// TEST CASES
console.log(programmers(147, 526, 33));
console.log(programmers(33, 72, 74));
console.log(programmers(9, 5, 1));

