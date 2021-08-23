// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function isPythagoreanTriplet(a, b, c) {
  if (a > b || a > c || b > c) {
    return false;
  }

  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

function answer() {
  const key = 1000;

  for (let c = 0; c < key; c++) {
    for (let b = 0; b < c; b++) {
      for (let a = 0; a < b; a++) {
        if (a + b + c === key) {
          if (isPythagoreanTriplet(a, b, c)) {
            return a * b * c;
          }
        }
      }
    }
  }

  return -1;
}

const logAnswer = require('../utils/logAnswer');
logAnswer(answer);
