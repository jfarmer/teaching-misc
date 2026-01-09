/**
 * Solution for dropWhile.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function dropWhile(pred, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  if (pred(first)) {
    return dropWhile(pred, rest);
  }
  return prepend(first, rest);
}

const isPositive = (n) => n > 0;

if (require.main === module) {
  console.assert(JSON.stringify(toArray(dropWhile(isPositive, Node.fromArray([1, 2, -3, 4])))) === '[-3,4]');
  console.assert(JSON.stringify(toArray(dropWhile(isPositive, Node.fromArray([-1, 2, 3])))) === '[-1,2,3]');
  console.assert(JSON.stringify(toArray(dropWhile(isPositive, Node.fromArray([1, 2, 3])))) === '[]');
  console.assert(JSON.stringify(toArray(dropWhile(isPositive, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { dropWhile };
