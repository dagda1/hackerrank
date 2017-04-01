// delete require.cache['/Users/paul/projects/js-scratch/queue.js']; require('./queue');
const fs = require('fs');

function Queue() {
  const inbox = new Array();
  const outbox = new Array();

  const self = this;

  this.shuffle = () => {
    if(!outbox.length) {
      while(inbox.length) {
        outbox.push(inbox.pop());
      }
    }
  }
  this.dequeue = () => {
    self.shuffle();
    return outbox.pop();
  };


  this.enqueue = (el) => {
    inbox.push(el);
  };

  this.peek = () => {
    self.shuffle();
    if(!outbox.length) {
      return;
    }

    return outbox[outbox.length - 1];
  }
}

function processData(input) {
  const data = input.split('\n').slice(1);

  const queue = new Queue();

  data.filter(x => x.length).forEach((el) => {
    const bits = el.split(' ');


    switch(parseInt(bits[0], 10)) {
      case 1:
        queue.enqueue(bits[1]);
        break;
      case 2:
        queue.dequeue();
        break;
      case 3:
        console.log(queue.peek());
        break;
    }
  });
}

processData(fs.readFileSync('./queue_data.txt', 'utf-8'));