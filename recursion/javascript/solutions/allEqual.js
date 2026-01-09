/**
 * Solution for allEqual.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function allEqual(list) {
  if (isEmpty(list)) {
    return true;
  }

  if (isEmpty(list.next)) {
    return true;
  }

  let [first, rest] = unprepend(list);
  let second = rest.value;

  return first === second && allEqual(rest);
}

if (require.main === module) {
  console.assert(allEqual(Node.fromArray([5, 5, 5])) === true);
  console.assert(allEqual(Node.fromArray([5, 5, 3])) === false);
  console.assert(allEqual(EMPTY_LIST) === true);
  console.assert(allEqual(Node.fromArray([42])) === true);
  console.assert(allEqual(Node.fromArray([1, 1, 1, 1, 2])) === false);

  console.log('All tests passed!');
}

module.exports = { allEqual };
