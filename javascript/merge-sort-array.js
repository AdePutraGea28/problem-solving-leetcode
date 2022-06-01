function merge(nums1, m, nums2, n) {
  if (nums2.length === 0) return nums1;
  if (nums1.length === 0) return nums2;

  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - n];
  }

  return nums1.sort();
  //   return bubleSort(nums1);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([], 0, [1], 1));

// this function for sorting nums1, but you also can use sort() method from javascript
function bubleSort(arr) {
  let done = false;

  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
