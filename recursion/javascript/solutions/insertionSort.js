/**
 * Solution for insertionSort.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend, toArray } = require('./linkedList');
const { insertSorted } = require('./insertSorted');

function insertionSort(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return insertSorted(first, insertionSort(rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(insertionSort(Node.fromArray([3, 1, 4, 1, 5])))) === '[1,1,3,4,5]');
  console.assert(JSON.stringify(toArray(insertionSort(Node.fromArray([5, 4, 3, 2, 1])))) === '[1,2,3,4,5]');
  console.assert(JSON.stringify(toArray(insertionSort(Node.fromArray([1])))) === '[1]');
  console.assert(JSON.stringify(toArray(insertionSort(EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { insertionSort };
