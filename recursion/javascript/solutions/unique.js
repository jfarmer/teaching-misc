/**
 * Solution for unique.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

// Helper: filter out all occurrences of val
function without(val, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  if (first === val) {
    return without(val, rest);
  }
  return prepend(first, without(val, rest));
}

function unique(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return prepend(first, unique(without(first, rest)));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(unique(Node.fromArray([1, 2, 1, 3, 2])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(unique(Node.fromArray([1, 1, 1])))) === '[1]');
  console.assert(JSON.stringify(toArray(unique(Node.fromArray([1, 2, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(unique(EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { unique };
