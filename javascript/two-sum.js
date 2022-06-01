function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
