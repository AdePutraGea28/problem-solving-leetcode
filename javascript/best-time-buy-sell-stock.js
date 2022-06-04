function maxProfit(prices) {
  let slow = 0;
  let fast = 1;

  let max = 0;

  while (fast < prices.length) {
    if (prices[slow] < prices[fast]) {
      max = Math.max(max, prices[fast] - prices[slow]);
    } else {
      slow = fast;
    }

    fast++;
  }
  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
