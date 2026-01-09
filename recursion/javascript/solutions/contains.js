/**
 * Solution for contains.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function contains(val, list) {
  if (isEmpty(list)) {
    return false;
  }

  let [first, rest] = unprepend(list);

  return first === val || contains(val, rest);
}

if (require.main === module) {
  console.assert(contains(2, Node.fromArray([1, 2, 3])) === true);
  console.assert(contains(5, Node.fromArray([1, 2, 3])) === false);
  console.assert(contains(5, EMPTY_LIST) === false);
  console.assert(contains(1, Node.fromArray([1])) === true);

  console.log('All tests passed!');
}

module.exports = { contains };
