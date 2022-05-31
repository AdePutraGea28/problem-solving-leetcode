function containsDuplicate(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      return map.has(nums[i]);
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 2, 4])); // true

// other way
// function containsDuplicate(nums) {
//   let result = false;
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       result = true;
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   return result;
// }
