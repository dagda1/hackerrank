// delete require.cache['/Users/paulcowan/projects/hackerrank/min.js']; require('./min');

// https://www.hackerrank.com/contests/w30/challenges/find-the-minimum-number/submissions/code/1301256832

'use strict';

const input = 2;

const writeMin = (input) => {
  let vars = input - 2;
  let output = '';

  if(vars === 0) {
    return 'min(int, int)';
  }

  for(let i = 0; i < vars; i++) {
    if(!output.length) {
      output = 'min(int, int)';
    }

    output = `min(int, ${output})`;
  }

  return output;
};

console.log(writeMin(input));
