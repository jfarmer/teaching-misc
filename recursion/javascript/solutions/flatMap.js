/**
 * Solution for flatMap.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');
const { concat } = require('./concat');

function flatMap(fn, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return concat(fn(first), flatMap(fn, rest));
}

if (require.main === module) {
  const duplicate = (x) => Node.fromArray([x, x]);
  console.assert(JSON.stringify(toArray(flatMap(duplicate, Node.fromArray([1, 2])))) === '[1,1,2,2]');

  const expand = (x) => Node.fromArray([x, x * 10]);
  console.assert(JSON.stringify(toArray(flatMap(expand, Node.fromArray([1, 2, 3])))) === '[1,10,2,20,3,30]');

  console.assert(JSON.stringify(toArray(flatMap(duplicate, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { flatMap };
