//delete require.cache['/Users/paulcowan/projects/hackerrank/icecream.js']; require('./icecream')

const fs = require('fs');

//const input = fs.readFileSync('./icecream.txt', 'utf-8').split('\n').slice(1);

//console.log(input);

const money = 4;
const length = 5;

const flavours = [2, 2, 4, 3];

const trips = (arr, total, length) => {
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      if(i === j) {
        continue;
      }

      if(arr[i] + arr[j] === total) {
        console.log(`${i + 1} ${j + 1}`);
        return;
      }
    }
  }
}

trips(flavours, money, length);
