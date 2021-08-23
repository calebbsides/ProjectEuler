// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const isPrime = require('../utils/isPrime');

function answer() {
  const key = 2000000;
  const primes = [];

  for (let i = 2; i < key; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes.reduce((a, b) => a + b, 0);
}

const logAnswer = require('../utils/logAnswer');
logAnswer(answer);
