/**
 * Solution for without.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

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

if (require.main === module) {
  console.assert(JSON.stringify(toArray(without(2, Node.fromArray([1, 2, 3, 2, 4])))) === '[1,3,4]');
  console.assert(JSON.stringify(toArray(without(5, Node.fromArray([1, 2, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(without(1, Node.fromArray([1, 1, 1])))) === '[]');
  console.assert(JSON.stringify(toArray(without(1, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { without };
