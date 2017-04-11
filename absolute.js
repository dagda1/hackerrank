// delete require.cache['/Users/paul/projects/hackerrank/absolute.js']; require('./absolute');

'use strict';

const absolute = (length, arr) => {
  if(arr.length === 1) {
    return arr[0];
  }

  let result = 10000;

  arr = arr.sort();

  for(let i = 0; i < arr.length -1; i++) {
    const current = Math.abs(arr[i] - arr[i + 1]);

    if(current < result) {
      result = current;
    }
  }

  return result;
};

require('fs');

const [length, input] = fs.readFileSync('./absolute.txt', 'utf-8').split('\n');

const array = input.split(' ').map(Number)

console.log(absolute(length, array));
