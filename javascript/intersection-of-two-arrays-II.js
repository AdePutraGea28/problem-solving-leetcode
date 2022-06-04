function intersection(nums1, nums2) {
  // first we need to sorting but from the higher to lower all nums
  let arr1 = nums1.sort((a, b) => b - a); // [2,2,1,1]
  let arr2 = nums2.sort((a, b) => b - a); // [2,2]

  let result = [];

  // we'll do looping and looping will stop if length of both arr is zero
  while (arr1.length && arr2.length) {
    //if the last element of arr1 and arr2 is equal, push to the result
    if (arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
      // after we push the element we need to delete from both arr
      // arr1 = [1,1,2], arr2 = [2]
      result.push(arr1.pop());
      arr2.pop();
    }
    // if not equal and arr1 is greater than arr2 we need to delete arr2
    else if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr2.pop();
    }
    // and if all condition not match
    else {
      arr1.pop();
    }
  }
  return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9] or [9,4]
console.log(intersection([1, 2, 2, 1], [2])); // 2

// =====================================================
// THIS IS THE OTHER WAY TO SOLVE THE PROBLEM USING MAP()
// =====================================================
//
//
// function intersection(nums1, nums2) {
//     let map = new Map();

//     // we are just need the element of nums1
//     for (let n of nums1) {
//       if (map.has(n)) {
//         map.set(n, map.get(n) + 1); // (2 : 1 + 1 => 2:2), (1 : 1 + 1 => 1:2)
//       } else {
//         map.set(n, 1); // 1 : 1, 2 : 1
//       }
//     }

//     // we'll return this array called result
//     const result = [];

//     // check if element in nums2 owned by map and the value should greater than 0
//     for (let n of nums2) {
//       if (map.has(n) && map.get(n) > 0) {
//         result.push(n);
//         // we need to decrease the value of the key that we push in result
//         map.set(n, map.get(n) - 1);
//       }
//     }

//     return result;
//   }
