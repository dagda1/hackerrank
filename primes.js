'use strict';
// delete require.cache['/Users/paulcowan/projects/hackerrank/primes.js']; require('./primes')

function isPrime(n) {
  if(n <= 1) {
    return 'Not prime';
  }

  if(n == 2 || n == 3) {
    return 'Prime';
  }

  if(n % 2 === 0) {
    return 'Not prime';
  }

  const root = Math.floor(Math.sqrt(n));

  let i = 3, result = undefined;

  while(!result) {
    if(i > root) {
      result = 'Prime';
    }

    if(n % i === 0) {
      result = 'Not prime';
    }

    i += 2;
  }

  return result;
}

const fs = require('fs');

const data = fs.readFileSync('primes.txt', 'utf-8').trim().split('\n')
               .slice(1)
               .map(Number);

data.forEach(x => console.log(isPrime(x)));
