/**
 * Solution for takeWhile.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function takeWhile(pred, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  if (pred(first)) {
    return prepend(first, takeWhile(pred, rest));
  }
  return EMPTY_LIST;
}

const isPositive = (n) => n > 0;

if (require.main === module) {
  console.assert(JSON.stringify(toArray(takeWhile(isPositive, Node.fromArray([1, 2, -3, 4])))) === '[1,2]');
  console.assert(JSON.stringify(toArray(takeWhile(isPositive, Node.fromArray([-1, 2, 3])))) === '[]');
  console.assert(JSON.stringify(toArray(takeWhile(isPositive, Node.fromArray([1, 2, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(takeWhile(isPositive, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { takeWhile };
