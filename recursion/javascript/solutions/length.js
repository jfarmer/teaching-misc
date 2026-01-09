/**
 * Solution for length.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function length(list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  return 1 + length(rest);
}

if (require.main === module) {
  console.assert(length(Node.fromArray([1, 2, 3])) === 3);
  console.assert(length(Node.fromArray([1, 2, 3, 4, 5])) === 5);
  console.assert(length(Node.fromArray([42])) === 1);
  console.assert(length(EMPTY_LIST) === 0);

  console.log('All tests passed!');
}

module.exports = { length };
