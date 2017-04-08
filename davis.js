//delete require.cache['/Users/paulcowan/projects/hackerrank/davis.js']; require('./davis')

const input = [1, 3, 7];

const noOfStairCases = (n, memo) => {
  if(memo[n]) {
    return memo[n];
  }

  memo[n] = noOfStairCases(n - 3, memo) + noOfStairCases(n - 2, memo) + noOfStairCases(n - 1, memo);

  return memo[n];
}

const memo = {};

memo[0] = 0;
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

console.log(noOfStairCases(7, memo));
