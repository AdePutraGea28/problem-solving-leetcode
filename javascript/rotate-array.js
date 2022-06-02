function rotate(nums, k) {
  let howManyElement = k % nums.length;
  const takeLastElement = nums.splice(-howManyElement);
  nums.unshift(...takeLastElement);
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2)); //[ 3, 99, -1, -100 ]
console.log(rotate([1, 2], 3)); // [ 2, 1 ]
