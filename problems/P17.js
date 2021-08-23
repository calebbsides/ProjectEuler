// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

function getStringLength(num) {
  var numToString = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
  ]);

  var length = 0;

  if (num < 20) {
    length = numToString.get(num).length;
  } else if (num < 100) {
    length = numToString.get(Math.floor(num / 10) * 10).length;

    if (num % 10 !== 0) {
      length += getStringLength(num % 10);
    }
  } else if (num < 1000) {
    length = numToString.get(Math.floor(num / 100)).length;

    if (num % 100 !== 0) {
      length += 'hundredand'.length;
      length += getStringLength(num % 100);
    } else {
      length += 'hundred'.length;
    }
  } else if (num < 1000000) {
    length = numToString.get(Math.floor(num / 1000)).length;
    length += 'thousand'.length;
  }

  return length;
}

function answer() {
  let num = 0;

  for (let i = 1; i < 1001; i++) {
    num += getStringLength(i);
  }

  return num;
}

const logAnswer = require('../utils/logAnswer');
logAnswer(answer);
