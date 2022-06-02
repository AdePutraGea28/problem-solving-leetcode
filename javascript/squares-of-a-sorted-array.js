function sortedSquares(nums) {
  let result = [];
  let leftPointer = 0;
  let rigthPointer = nums.length - 1;
  let resultPointer = nums.length - 1;

  while (leftPointer <= rigthPointer) {
    if (nums[leftPointer] ** 2 > nums[rigthPointer] ** 2) {
      result[resultPointer] = nums[leftPointer] ** 2;
      leftPointer++;
      resultPointer--;
    } else {
      result[resultPointer] = nums[rigthPointer] ** 2;
      rigthPointer--;
      resultPointer--;
    }
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
