// delete require.cache['/Users/paul/projects/hackerrank/beautifulword.js']; require('./beautifulword');

'use strict';

const isBeautiful = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  const chars = Array.from(word);

  const prev = chars[0];

  for(let i = 1; i < chars.length; i++) {
    const prev = chars[i - 1];
    const current = chars[i];

    if(prev === current) {
      return 'No';
    }

    const prevIsAvowel = vowels.indexOf(prev) !== -1;
    const currentIsAvowel = vowels.indexOf(current) !== -1;

    if(prevIsAvowel && currentIsAvowel) {
      return 'No';
    }
  }

  return 'Yes';
}

console.log(isBeautiful('yes'));
