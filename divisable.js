'use strict';

const fs = require('fs');

let [n, types] = fs.readFileSync('./divisable.txt', 'utf-8').split('\n');

n = Number(n);

types = types.split(' ').map(Number);

const counts = types.reduce((acc, curr) => {
  acc[curr]++;

  return acc;
}, {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0
});

const max = Object.keys(counts).slice(1).reduce((acc, key) => {
  const leader = acc[Object.keys(acc)[0]];
  const next = counts[key];
  if(leader === next) {
    if(parseInt(Object.keys(acc)[0], 10) < parseInt(key, 10)) {
      return acc;
    } else {
      return {[key]: next}
    }
  }

  if(next > leader) {
    return {[key]: next}
  }


  return acc;
}, {1: counts[1]});

console.log(parseInt(Object.keys(max)[0], 10));
