/**
 * Solution for countIf.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function countIf(pred, list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  return (pred(first) ? 1 : 0) + countIf(pred, rest);
}

const isEven = (n) => n % 2 === 0;

if (require.main === module) {
  console.assert(countIf(isEven, Node.fromArray([1, 2, 3, 4])) === 2);
  console.assert(countIf(isEven, Node.fromArray([1, 3, 5])) === 0);
  console.assert(countIf(isEven, Node.fromArray([2, 4, 6])) === 3);
  console.assert(countIf(isEven, EMPTY_LIST) === 0);

  console.log('All tests passed!');
}

module.exports = { countIf };
