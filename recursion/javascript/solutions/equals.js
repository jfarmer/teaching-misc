/**
 * Solution for equals.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function equals(list1, list2) {
  if (isEmpty(list1) && isEmpty(list2)) {
    return true;
  }

  if (isEmpty(list1) || isEmpty(list2)) {
    return false;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return first1 === first2 && equals(rest1, rest2);
}

if (require.main === module) {
  console.assert(equals(Node.fromArray([1, 2, 3]), Node.fromArray([1, 2, 3])) === true);
  console.assert(equals(Node.fromArray([1, 2]), Node.fromArray([1, 2, 3])) === false);
  console.assert(equals(EMPTY_LIST, EMPTY_LIST) === true);
  console.assert(equals(Node.fromArray([1]), EMPTY_LIST) === false);

  console.log('All tests passed!');
}

module.exports = { equals };
