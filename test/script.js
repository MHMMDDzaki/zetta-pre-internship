/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */

function majorityElement(nums) {
  let count = 0;
  let majorityCandidate = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorityCandidate = nums[i];
    }

    if (nums[i] === majorityCandidate) {
      count = count + 1;
    } else {
      count = count - 1;
    }
  }

  return majorityCandidate;
}

// console.log(majorityElement([3,2,3,2,3,1,4,3,2,5,3,6,3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 1]));
