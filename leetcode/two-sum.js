/*
Two Sum
source: leetcode - easy
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

** Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// MY SOLUTION 
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if (nums.indexOf(remainder, i+1) !== -1) {
            return [i, nums.indexOf(remainder, i+1)];
        } 
    }
}

// TEST CASES
//console.log(twoSum([2, 7, 11, 15], 9)); // -> [0, 1]
//console.log(twoSum([3, 3], 6));         // -> [0, 1]
console.log(twoSum([3, 2, 4], 6));       // -> [1, 2]

