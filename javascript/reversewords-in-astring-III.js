function reverseWord(string) {
  let ans = '';
  let reversWord = '';

  for (let character of string) {
    if (character === ' ') {
      ans += reversWord + character; // ans = "" + "s'teL" + " "
      reversWord = ''; // reset from "s'teL" to ""
    } else {
      reversWord = character + reversWord; // "L" + "" = "L "|| "L " + "e" = "eL "
    }
  }
  return ans + reversWord; //"s'teL ekat edoCteeL " + "tsetnoc "
}

console.log(reverseWord("Let's take LeetCode contest")); //"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWord('God Ding')); // "doG gniD"
