// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

const bigInt = require('big-integer');

function answer() {
  const num = bigInt(2).pow(1000);
  const numAsString = num.value.toString();
  const numAsArray = [];

  for (let i = 0; i < numAsString.length; i++) {
    numAsArray.push(parseInt(numAsString[i]));
  }

  return numAsArray.reduce((a, b) => a + b);
}

const logAnswer = require('../utils/logAnswer');
logAnswer(answer);
