function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i + 1];
    } else {
      map.set(nums[i], i + 1);
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); //[1,2]
console.log(twoSum([3, 2, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
