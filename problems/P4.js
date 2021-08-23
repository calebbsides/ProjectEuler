// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = require('../utils/isPalindrome');
const logAnswer = require('../utils/logAnswer');

function answer() {
  let max = 0;

  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      const product = i * j;
      if (isPalindrome(product.toString())) {
        if (product > max) {
          max = product;
        }
      }
    }
  }

  return max;
}

logAnswer(answer);
