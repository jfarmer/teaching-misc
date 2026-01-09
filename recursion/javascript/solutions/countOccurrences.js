/**
 * Solution for countOccurrences.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function countOccurrences(val, list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  return (first === val ? 1 : 0) + countOccurrences(val, rest);
}

if (require.main === module) {
  console.assert(countOccurrences(2, Node.fromArray([1, 2, 2, 3])) === 2);
  console.assert(countOccurrences(5, Node.fromArray([1, 2, 3])) === 0);
  console.assert(countOccurrences(1, Node.fromArray([1, 1, 1])) === 3);
  console.assert(countOccurrences(1, EMPTY_LIST) === 0);

  console.log('All tests passed!');
}

module.exports = { countOccurrences };
