// delete require.cache['/Users/paulcowan/projects/hackerrank/lonely-integer.js']; require('./lonely-integer')
'use strict';

function findLonely(input) {
  const nums = input.split(' ').map(Number);

  let found, l = nums.length, i = 0;

  while(i < l && (found === undefined)) {
    const current = nums[i];

    const notLonely = nums.find((el, index) => {
      return (i !== index) && (el === current);
    });

    if(notLonely === undefined) {
      console.log(current);
      found = true;
    }
    i++;
  }
}

const fs = require('fs');

const data = fs.readFileSync('./lonely-integer.txt', 'UTF-8').split('\n').slice(1);

data.forEach(findLonely);
