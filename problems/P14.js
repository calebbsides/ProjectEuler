// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

function countChain(n, memo) {
  if (memo[n]) return memo[n];

  if (n % 2 === 0) memo[n] = 1 + countChain(n / 2, memo);
  else memo[n] = 2 + countChain((3 * n + 1) / 2, memo);

  return memo[n];
}

function answer() {
  const key = 1000000;
  let longestChain = 0;
  let numWithLongestChain = 1;

  const memo = {
    1: 1,
  };

  for (let i = key / 2; i < key; i++) {
    let chain = countChain(i, memo);

    if (chain > longestChain) {
      longestChain = chain;
      numWithLongestChain = i;
    }
  }

  return numWithLongestChain;
}

const logAnswer = require('../utils/logAnswer');
logAnswer(answer);
