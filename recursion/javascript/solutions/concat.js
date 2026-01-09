/**
 * Solution for concat.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function concat(list1, list2) {
  if (isEmpty(list1)) {
    return list2;
  }

  let [first, rest] = unprepend(list1);

  return prepend(first, concat(rest, list2));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(concat(Node.fromArray([1, 2]), Node.fromArray([3, 4])))) === '[1,2,3,4]');
  console.assert(JSON.stringify(toArray(concat(EMPTY_LIST, Node.fromArray([1, 2])))) === '[1,2]');
  console.assert(JSON.stringify(toArray(concat(Node.fromArray([1, 2]), EMPTY_LIST))) === '[1,2]');
  console.assert(JSON.stringify(toArray(concat(EMPTY_LIST, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { concat };
