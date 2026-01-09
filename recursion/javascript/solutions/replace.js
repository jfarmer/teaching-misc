/**
 * Solution for replace.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function replace(old, newVal, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  if (first === old) {
    return prepend(newVal, replace(old, newVal, rest));
  }
  return prepend(first, replace(old, newVal, rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(replace(2, 99, Node.fromArray([1, 2, 3, 2])))) === '[1,99,3,99]');
  console.assert(JSON.stringify(toArray(replace(5, 99, Node.fromArray([1, 2, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(replace(1, 0, Node.fromArray([1, 1, 1])))) === '[0,0,0]');
  console.assert(JSON.stringify(toArray(replace(1, 0, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { replace };
