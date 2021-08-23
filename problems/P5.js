// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const isPrime = require('../utils/isPrime');

function answer() {
  let num = 20;
  const primes = [];
  let N = 1;

  for (let i = 2; i < num + 1; i++) {
    if (isPrime(i)) primes.push(i);
  }

  for (let i = 0; i < primes.length; i++) {
    let x = 1;

    if (primes[i] < Math.sqrt(num)) {
      x = Math.floor(Math.log(num) / Math.log(primes[i]));
    }

    N = N * Math.pow(primes[i], x);
  }

  return N;
}

const logAnswer = require('../utils/logAnswer');
logAnswer(answer);
