function reverseStr(arrStr) {
  let leftIndex = 0;
  let rightIndex = arrStr.length - 1;

  while (leftIndex < rightIndex) {
    let temp = arrStr[leftIndex];
    arrStr[leftIndex] = arrStr[rightIndex];
    arrStr[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return arrStr;
}

console.log(reverseStr(['h', 'e', 'l', 'l', 'o']));
