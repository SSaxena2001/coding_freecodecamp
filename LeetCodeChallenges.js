// TODO-
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
var twoSum = (nums, target) => {
    let map = {};
    for(let i=0; i<nums.length; i++) {
        map[nums[i]] = i;
    }
    for(let i=0; i<nums.length; i++) {
        if(Object.keys(map).includes(String(target - nums[i])) && i !== map[target - nums[i]]){
            return [i, map[target - nums[i]]];
        }
    }
};

console.log(
    twoSum([2,7,11,15],9),
    twoSum([3,2,4],6)
)

// Problem-2 - 
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  var addTwoNumbers = function(l1, l2) {
//     og_l1 = l1.sort().reverse()
//     og_l2 = l2.sort().reverse()
// }