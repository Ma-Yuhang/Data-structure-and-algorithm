const coins = [1, 2, 5, 7, 10]
const amount = 14
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }
  const dp = Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  console.log(dp);
  return dp[dp.length - 1] === Number.MAX_VALUE ? -1 : dp[dp.length - 1];
};
console.log(coinChange(coins, amount));