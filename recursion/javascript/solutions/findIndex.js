/**
 * Solution for findIndex.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function findIndex(pred, list) {
  function helper(list, idx) {
    if (isEmpty(list)) {
      return -1;
    }

    let [first, rest] = unprepend(list);

    if (pred(first)) {
      return idx;
    }
    return helper(rest, idx + 1);
  }

  return helper(list, 0);
}

const isEven = (n) => n % 2 === 0;

if (require.main === module) {
  console.assert(findIndex(isEven, Node.fromArray([1, 3, 4, 6])) === 2);
  console.assert(findIndex(isEven, Node.fromArray([1, 3, 5])) === -1);
  console.assert(findIndex(isEven, Node.fromArray([2, 4, 6])) === 0);
  console.assert(findIndex(isEven, EMPTY_LIST) === -1);

  console.log('All tests passed!');
}

module.exports = { findIndex };
