/**
 * Solution for merge.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function merge(list1, list2) {
  if (isEmpty(list1)) {
    return list2;
  }

  if (isEmpty(list2)) {
    return list1;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  if (first1 <= first2) {
    return prepend(first1, merge(rest1, list2));
  }
  return prepend(first2, merge(list1, rest2));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(merge(Node.fromArray([1, 3, 5]), Node.fromArray([2, 4, 6])))) === '[1,2,3,4,5,6]');
  console.assert(JSON.stringify(toArray(merge(Node.fromArray([1, 2]), EMPTY_LIST))) === '[1,2]');
  console.assert(JSON.stringify(toArray(merge(EMPTY_LIST, Node.fromArray([1, 2])))) === '[1,2]');
  console.assert(JSON.stringify(toArray(merge(Node.fromArray([1, 1]), Node.fromArray([1, 1])))) === '[1,1,1,1]');

  console.log('All tests passed!');
}

module.exports = { merge };
