/**
 * Solution for indexOf.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function indexOf(val, list) {
  function helper(list, idx) {
    if (isEmpty(list)) {
      return -1;
    }

    let [first, rest] = unprepend(list);

    if (first === val) {
      return idx;
    }
    return helper(rest, idx + 1);
  }

  return helper(list, 0);
}

if (require.main === module) {
  console.assert(indexOf(3, Node.fromArray([1, 2, 3, 4])) === 2);
  console.assert(indexOf(5, Node.fromArray([1, 2, 3])) === -1);
  console.assert(indexOf(1, Node.fromArray([1, 2, 3])) === 0);
  console.assert(indexOf(1, EMPTY_LIST) === -1);

  console.log('All tests passed!');
}

module.exports = { indexOf };
