// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function answer() {
  let sumOfSquares;
  let squareOfSum;
  const arr = [];

  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }

  squareOfSum = Math.pow(
    arr.reduce((a, b) => a + b, 0),
    2
  );

  const squares = arr.map((x) => Math.pow(x, 2));

  sumOfSquares = squares.reduce((a, b) => a + b, 0);

  const diff = squareOfSum - sumOfSquares;

  return diff;
}

const logAnswer = require('../utils/logAnswer');
logAnswer(answer);
