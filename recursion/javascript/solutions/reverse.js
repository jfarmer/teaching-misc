/**
 * Solution for reverse.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

// Helper: append to end of list
function append(val, list) {
  if (isEmpty(list)) {
    return prepend(val, EMPTY_LIST);
  }

  let [first, rest] = unprepend(list);

  return prepend(first, append(val, rest));
}

function reverse(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return append(first, reverse(rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(reverse(Node.fromArray([1, 2, 3])))) === '[3,2,1]');
  console.assert(JSON.stringify(toArray(reverse(Node.fromArray([42])))) === '[42]');
  console.assert(JSON.stringify(toArray(reverse(EMPTY_LIST))) === '[]');
  console.assert(JSON.stringify(toArray(reverse(Node.fromArray([1, 2, 3, 4, 5])))) === '[5,4,3,2,1]');

  console.log('All tests passed!');
}

module.exports = { reverse, append };
