let Benchmark = require('benchmark');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  prepend(value) {
    return new Node(value, this);
  }

  unprepend() {
    return this.next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  prepend(value) {
      this.head = new Node(value, this.head);
      return;
  }

  unprepend() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    return;
  }
}

function randomInt(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an instance of Benchmark.js suite
let suite = new Benchmark.Suite;

let NUM_LENGTHS_TO_BENCH = 24;
let NUM_TO_INSERT = randomInt();
let arrayLengths = Array.from({length: NUM_LENGTHS_TO_BENCH}, (_, i) => 2**i);
let arrays = arrayLengths.reduce((acc, length) => {
  acc[length] = Array.from({length}, () => randomInt());
  return acc;
}, {})

let list = new LinkedList();

suite.add('LinkedList', function () {
  list.prepend(NUM_TO_INSERT);
  list.unprepend();
})


for (let [length, array] of Object.entries(arrays)) {
  suite.add(`array-${length}`, function() {
    array.unshift(NUM_TO_INSERT);
    array.shift();
  });
}

  // Test linked list append operation

suite.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  this.forEach(function(sample) {
    if (sample.name.startsWith('array-')) {
      let [_, length] = sample.name.split('-');

      console.log('%d\t%f', length, sample.stats.mean);
    }
  });
}).run({ 'async': true });
