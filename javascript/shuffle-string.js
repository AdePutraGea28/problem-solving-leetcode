function restoreString(s, indices) {
  let ans = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    ans[indices[i]] = s[i];
  }

  return ans.join('');
}

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString('acb', [0, 2, 1]));
console.log(restoreString('abcdef', [0, 1,2,3,4,5]));
