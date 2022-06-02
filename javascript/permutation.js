function permutation(nums) {
  let result = [];
  let used = new Array(nums.length).fill(false);

  backtracking(nums, used, result, []);

  return result;
}

function backtracking(nums, used, result, temp) {
  // this condition for stop recursif from infinity looping
  if (temp.length === nums.length) {
    result.push(Array.from(temp));
  }

  for (let i = 0; i < nums.length; i++) {
    // skip used nums
    if (used[i]) continue;
    // add nums to permutation, mark nums as unused
    temp.push(nums[i]);
    used[i] = true;
    backtracking(nums, used, result, temp);
    // remove nums from permutation, mark nums as unused
    temp.pop();
    used[i] = false;
  }
}

// console.log(permutation([1, 2, 3]));
console.log(permutation([0, 1]));
