//delete require.cache['/Users/paulcowan/projects/hackerrank/median.js']; require('./median')
'use strict';

const assert = (expr) => {
	if(!expr) {
		throw new Error('no');
	}
};

const fs = require('fs');
const input = fs.readFileSync('./median.txt', 'utf-8').trim().split('\n').slice(1);

function Heap() {
	this.content = new Array();

	this.push = (item) => {
		this.content.push(item);

		const length = this.content.length;
    const childIndex =  length - 1;

		this.content = this.content.sort((a, b) => a > b);

    console.log(this.median());
	};

	this.median = () => {
		const hasMiddle = this.content.length % 2 !== 0;

		const mid = Math.floor(this.content.length / 2);

		let median = 0;

		if(hasMiddle) {
			median = this.content[mid];
		} else {
			const next = this.content[mid -1 ];
			median = ((this.content[mid] + next) / 2);
		}

		return median.toFixed(1);
	}
}

const heap = new Heap();

input.forEach((i) => {
  heap.push(parseInt(i, 10));
});