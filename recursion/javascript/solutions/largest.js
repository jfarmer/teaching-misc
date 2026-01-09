/**
 * Solution for largest.
 */

const { Node, isEmpty, unprepend } = require('./linkedList');

function largest(list) {
  if (isEmpty(list.next)) {
    return list.value;
  }

  let [first, rest] = unprepend(list);

  return Math.max(first, largest(rest));
}

if (require.main === module) {
  console.assert(largest(Node.fromArray([3, 7, 2])) === 7);
  console.assert(largest(Node.fromArray([1, 2, 3, 4, 5])) === 5);
  console.assert(largest(Node.fromArray([5, 4, 3, 2, 1])) === 5);
  console.assert(largest(Node.fromArray([42])) === 42);
  console.assert(largest(Node.fromArray([-5, -3, -10])) === -3);

  console.log('All tests passed!');
}

module.exports = { largest };
