// delete require.cache['/Users/paul/projects/js-scratch/anagram.js']; require('./anagram'');
'use strict';
const fs = require('fs');

const input = fs.readFileSync('./anagram.txt', 'utf-8').split('\n');

const a = input[0];
const b = input[1];

let left = ((a.length >= b.length) ? a : b)
let right = ((a === left) ? b : a);

// 
// left = left.split('');
// right = right.split('');
// 

left = Array.from(left);
right = Array.from(right);

const inBoth = left.reduce((acc, ch) => {
	const index = right.indexOf(ch);

	if(index !== -1) {
 		acc++;
 		right.splice(index, 1);
	}

return acc;
}, 0);

console.log((a.length - inBoth) + (b.length - inBoth));
