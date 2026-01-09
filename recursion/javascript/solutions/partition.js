/**
 * Solution for partition.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function partition(pred, list) {
  if (isEmpty(list)) {
    return [EMPTY_LIST, EMPTY_LIST];
  }

  let [first, rest] = unprepend(list);
  let [trues, falses] = partition(pred, rest);

  if (pred(first)) {
    return [prepend(first, trues), falses];
  }
  return [trues, prepend(first, falses)];
}

const isEven = (n) => n % 2 === 0;

if (require.main === module) {
  let [evens, odds] = partition(isEven, Node.fromArray([1, 2, 3, 4]));
  console.assert(JSON.stringify(toArray(evens)) === '[2,4]');
  console.assert(JSON.stringify(toArray(odds)) === '[1,3]');

  let [t, f] = partition(isEven, EMPTY_LIST);
  console.assert(JSON.stringify(toArray(t)) === '[]');
  console.assert(JSON.stringify(toArray(f)) === '[]');

  console.log('All tests passed!');
}

module.exports = { partition };
