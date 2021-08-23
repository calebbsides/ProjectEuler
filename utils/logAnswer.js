function logAnswer(compute) {
  const start = process.hrtime.bigint();

  const answer = compute();

  const end = process.hrtime.bigint();

  console.log('---------------------');
  console.log(`Found Answer: ${answer}, in ${end - start} nanoseconds`);
  console.log('---------------------');
}

module.exports = logAnswer;
