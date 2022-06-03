function moveZeros(nums) {
  let slow = 0;

  for (let i in nums) {
    if (nums[i] !== 0) {
      let temp = nums[slow];
      nums[slow] = nums[i];
      nums[i] = temp;
      slow++;
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeros([1, 0, 1])); // [1,1,0]
