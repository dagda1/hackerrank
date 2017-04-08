//delete require.cache['/Users/paulcowan/projects/hackerrank/median.js']; require('./median')

'use strict';

const assert = (expr) => {
	if(!expr) {
		throw new Error('no');
	}
};

const fs = require('fs');
//const input = fs.readFileSync('./median.txt', 'utf-8').trim().split('\n').slice(1).map(Number);
const input = [6] //, 12, 4, 5, 3, 8, 7]

  function Heap() {
	  this.minHeap = new Array();
    this.maxHeap = new Array();

    this.getParentIndex = (index) => Math.floor(index - 1 / 2);

    this.getLeftIndex = (index) => (index * 2);

    this.getRightIndex = (index) => (index * 2 + 1);

    let i = 0;

    this.shuffle = (childIndex) => {

    }
  }

  this.push = (item) => {
    const minHeap = this.minHeap;
    const maxHeap = this.maxHeap;

    if(!minHeap.length && !this.maxHeap.length) {
      maxHeap.push(item);
      return;
    }

    
  }

  this.median = () => {

	}
}

const heap = new Heap();

let i = 0;

input.forEach((num) => {
  if(i > 55) {
    return;
  }
  heap.push(num);
  //console.log(`median = ${heap.median()}`);
  i++;
});

console.log(heap.minHeap);
console.log(heap.maxHeap);
