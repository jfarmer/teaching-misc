/**
 * Solution for commonPrefix.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function commonPrefix(list1, list2) {
  if (isEmpty(list1) || isEmpty(list2)) {
    return EMPTY_LIST;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  if (first1 === first2) {
    return prepend(first1, commonPrefix(rest1, rest2));
  }
  return EMPTY_LIST;
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(commonPrefix(Node.fromArray([1, 2, 3]), Node.fromArray([1, 2, 5, 6])))) === '[1,2]');
  console.assert(JSON.stringify(toArray(commonPrefix(Node.fromArray([1, 2]), Node.fromArray([3, 4])))) === '[]');
  console.assert(JSON.stringify(toArray(commonPrefix(EMPTY_LIST, Node.fromArray([1, 2])))) === '[]');

  console.log('All tests passed!');
}

module.exports = { commonPrefix };
