function merge(nums1, m, nums2, n) {
  let idxElement1 = m - 1; // index for element in array nums1
  let idxElement2 = n - 1; // index for elemetn in array nums2
  let idxToStoreElement = m + n - 1;

  while (idxElement2 >= 0) {
    if (nums1[idxElement1] > nums2[idxElement2]) {
      nums1[idxToStoreElement] = nums1[idxElement1];
      idxElement1--;
    } else {
      nums1[idxToStoreElement] = nums2[idxElement2];
      idxElement2--;
    }
    idxToStoreElement--;
  }
  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

// =========================================================================
//
//
//
//
//
// this function for sorting nums1, but you also can use sort() method from javascript
// function bubleSort(arr) {
//   let done = false;
//   while (!done) {
//     done = true;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) {
//         done = false;
//         let temp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }
