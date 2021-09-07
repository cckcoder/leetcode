// Ref: https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let keyArr = [];
  for (let n = 0; n < nums.length; n++) {
    for (let n2 = n + 1; n2 < nums.length; n2++) {
      result = nums[n] + nums[n2];
      if (result === target) {
        keyArr.push(n);
        keyArr.push(n2);
      }
    }
  }
  return keyArr
};

console.log(twoSum([2, 7, 11, 15], 18))
