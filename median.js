//delete require.cache['/Users/paul/projects/js-scratch/median']; require('./median');

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

	this.parentIndex = (childIndex) => {
		if (childIndex % 2) {
      // left
      return (childIndex - 1)/2;
    }
    // right
    return (childIndex / 2) - 1;
	};

	this.swap = (left, right) => {
		const tmp = this.content[left];
		this.content[left] = this.content[right];
		this.content[right] = tmp;
	};

	this.shuffle = (childIndex) => {
		const parentIndex = this.parentIndex(childIndex);

		if(parentIndex < 0) {
			return;
		}

		console.log('--------------');
		console.log(childIndex);
		console.log(parentIndex)
		console.log(this.content);
		this.swap(parentIndex, childIndex);
		console.log(this.content);
		console.log(this.median());
		console.log('--------------');
	};

	this.push = (item) => {
		this.content.push(item);

		const length = this.content.length;
    const childIndex =  length > 1 ? length - 1 : 0;

		this.shuffle(childIndex);
	};

	this.median = () => {
		const hasMiddle = this.content.length % 2 !== 0;

		const mid = Math.floor(this.content.length / 2);

		let median = 0;

		if(hasMiddle) {
			median = this.content[mid];
		} else {
			const next = this.content[mid + 1] || this.content[mid -1 ];
			median = ((this.content[mid] + next) / 2);
		}

		return median.toFixed(1);
	}
}

const heap = new Heap();

heap.push(12);
heap.push(4);
