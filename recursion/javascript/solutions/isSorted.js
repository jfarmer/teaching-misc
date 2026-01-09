/**
 * Solution for isSorted.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function isSorted(list) {
  if (isEmpty(list)) {
    return true;
  }

  if (isEmpty(list.next)) {
    return true;
  }

  let [first, rest] = unprepend(list);
  let second = rest.value;

  return first <= second && isSorted(rest);
}

if (require.main === module) {
  console.assert(isSorted(Node.fromArray([1, 2, 3])) === true);
  console.assert(isSorted(Node.fromArray([1, 3, 2])) === false);
  console.assert(isSorted(EMPTY_LIST) === true);
  console.assert(isSorted(Node.fromArray([42])) === true);
  console.assert(isSorted(Node.fromArray([1, 1, 2, 3])) === true);

  console.log('All tests passed!');
}

module.exports = { isSorted };
