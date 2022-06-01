// this is called Kadane's Algorithm

function maxSubArray(nums) {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    //   console.log(currentMax);
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
}

console.log(maxSubArray([2, 1, -2, 3, 2]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([3, -10, 4]));

// function maxSubArray(nums) {
//   // this is called Kadane's Algorithm
//   if (nums.length == 0) return 0;
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] > 0) {
//       nums[i] += nums[i - 1];
//     }
//     max = Math.max(nums[i], max);
//   }
//   return max;
// }

// function maxSubArray(nums) {
//   // this is called Kadane's Algorithm
//   let arrMax = [];
//   arrMax.push(nums[0]);

//   for (let i = 1; i < nums.length; i++) {
//     let currentMax = Math.max(nums[i], arrMax[i - 1] + nums[i]);
//     arrMax.push(currentMax);
//   }

//   return Math.max.apply(null, arrMax);
// }
