/**
 * Solution for find.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function find(pred, list) {
  if (isEmpty(list)) {
    return null;
  }

  let [first, rest] = unprepend(list);

  if (pred(first)) {
    return first;
  }
  return find(pred, rest);
}

const isEven = (n) => n % 2 === 0;

if (require.main === module) {
  console.assert(find(isEven, Node.fromArray([1, 3, 4, 6])) === 4);
  console.assert(find(isEven, Node.fromArray([1, 3, 5])) === null);
  console.assert(find(isEven, EMPTY_LIST) === null);
  console.assert(find(isEven, Node.fromArray([2, 4, 6])) === 2);

  console.log('All tests passed!');
}

module.exports = { find };
