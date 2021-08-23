// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function answer() {
  let num = 600851475143;
  let lpf = 2;

  while (num > lpf) {
    if (num % lpf === 0) {
      num = num / lpf;
      lpf = 2;
    } else {
      lpf++;
    }
  }

  return lpf;
}

const logAnswer = require('../utils/logAnswer');

logAnswer(answer);
