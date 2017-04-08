//delete require.cache['/Users/paulcowan/projects/hackerrank/coin-change.js']; require('./coin-change')

const fs = require('fs');

const input = fs.readFileSync('./coin-change.txt', 'utf-8').split('\n');

const [amount, length] = input[0].split(' ').map(Number)

const coins = input[1].split(' ').map(Number);

sum(0);