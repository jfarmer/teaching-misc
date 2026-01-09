/**
 * Solution for insertSorted.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function insertSorted(val, list) {
  if (isEmpty(list)) {
    return prepend(val, EMPTY_LIST);
  }

  let [first, rest] = unprepend(list);

  if (val <= first) {
    return prepend(val, list);
  }
  return prepend(first, insertSorted(val, rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(insertSorted(3, Node.fromArray([1, 2, 4, 5])))) === '[1,2,3,4,5]');
  console.assert(JSON.stringify(toArray(insertSorted(0, Node.fromArray([1, 2, 3])))) === '[0,1,2,3]');
  console.assert(JSON.stringify(toArray(insertSorted(9, Node.fromArray([1, 2, 3])))) === '[1,2,3,9]');
  console.assert(JSON.stringify(toArray(insertSorted(5, EMPTY_LIST))) === '[5]');

  console.log('All tests passed!');
}

module.exports = { insertSorted };
