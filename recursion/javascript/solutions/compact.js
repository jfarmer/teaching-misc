/**
 * Solution for compact.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function compact(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  if (first == null) {
    return compact(rest);
  }
  return prepend(first, compact(rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(compact(Node.fromArray([1, null, 2, undefined, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(compact(Node.fromArray([null, null])))) === '[]');
  console.assert(JSON.stringify(toArray(compact(Node.fromArray([1, 2, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(compact(EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { compact };
