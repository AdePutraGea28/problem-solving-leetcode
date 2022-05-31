function search(nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    let middle = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    // if nums[middle]
    else if (nums[middle] < target) {
        leftPointer = middle + 1;
    } else if ( nums[middle] > target) {
        rightPointer = middle - 1;
    } 
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));

