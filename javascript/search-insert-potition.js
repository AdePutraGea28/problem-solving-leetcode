function searchInsert(nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    let middle = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      leftPointer = middle + 1;
    } else if (nums[middle] > target) {
      rightPointer = middle - 1;
    }
  }

  return leftPointer;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 4)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4

// 1 3 5 6
// 0 1 2 3

// 1 5 6   | 0 2 3
// 1 1 3   | 0 0 1
// 3 3 3   | 1 1 1
// 3   1   | 1   0

// 1 5 6   | 0 2 3
// 1 1 3   | 0 0 1
// 3 3 3   | 1 1 1
// 5   3   | 2   1
