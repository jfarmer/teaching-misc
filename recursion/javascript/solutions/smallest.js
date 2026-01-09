/**
 * Solution for smallest.
 */

const { Node, isEmpty, unprepend } = require('./linkedList');

function smallest(list) {
  if (isEmpty(list.next)) {
    return list.value;
  }

  let [first, rest] = unprepend(list);

  return Math.min(first, smallest(rest));
}

if (require.main === module) {
  console.assert(smallest(Node.fromArray([3, 7, 2])) === 2);
  console.assert(smallest(Node.fromArray([1, 2, 3, 4, 5])) === 1);
  console.assert(smallest(Node.fromArray([5, 4, 3, 2, 1])) === 1);
  console.assert(smallest(Node.fromArray([42])) === 42);
  console.assert(smallest(Node.fromArray([-5, -3, -10])) === -10);

  console.log('All tests passed!');
}

module.exports = { smallest };
