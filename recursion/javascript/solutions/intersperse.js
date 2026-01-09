/**
 * Solution for intersperse.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function intersperse(sep, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  if (isEmpty(list.next)) {
    return list;
  }

  let [first, rest] = unprepend(list);

  return prepend(first, prepend(sep, intersperse(sep, rest)));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(intersperse(0, Node.fromArray([1, 2, 3])))) === '[1,0,2,0,3]');
  console.assert(JSON.stringify(toArray(intersperse(0, Node.fromArray([1])))) === '[1]');
  console.assert(JSON.stringify(toArray(intersperse(0, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { intersperse };
