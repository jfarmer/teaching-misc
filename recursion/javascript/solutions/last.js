/**
 * Solution for last.
 */

const { Node, isEmpty, unprepend } = require('./linkedList');

function last(list) {
  if (isEmpty(list.next)) {
    return list.value;
  }

  let [first, rest] = unprepend(list);

  return last(rest);
}

if (require.main === module) {
  console.assert(last(Node.fromArray([1, 2, 3])) === 3);
  console.assert(last(Node.fromArray([42])) === 42);
  console.assert(last(Node.fromArray([1, 2, 3, 4, 5])) === 5);

  console.log('All tests passed!');
}

module.exports = { last };
