'use strict';

function getWays(squares, d, m){
  let total = 0;
  for(let i = 0; i < squares.length - m + 1; i ++) {
    const section = squares.slice(i, i + m);

    const sum = section.reduce((a, b) => a + b);

    if(sum === d) {
      total++;
    }
  }

  return total;
}

const input = `5
4
4 1`.split('\n').slice(1);

const squares = input[0].split(' ').map(Number);

const [d, m] = input[1].split(' ').map(Number);

const total = getWays(squares, d, m);

console.log(total);
