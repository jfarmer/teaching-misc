/**
 * Solution for append.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function append(val, list) {
  if (isEmpty(list)) {
    return prepend(val, EMPTY_LIST);
  }

  let [first, rest] = unprepend(list);

  return prepend(first, append(val, rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(append(99, Node.fromArray([1, 2, 3])))) === '[1,2,3,99]');
  console.assert(JSON.stringify(toArray(append(99, EMPTY_LIST))) === '[99]');
  console.assert(JSON.stringify(toArray(append(3, Node.fromArray([1, 2])))) === '[1,2,3]');

  console.log('All tests passed!');
}

module.exports = { append };
