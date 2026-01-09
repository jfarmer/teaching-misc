/**
 * Solution for mapList.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function mapList(fn, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return prepend(fn(first), mapList(fn, rest));
}

const double = (n) => n * 2;
const square = (n) => n * n;

if (require.main === module) {
  console.assert(JSON.stringify(toArray(mapList(double, Node.fromArray([1, 2, 3])))) === '[2,4,6]');
  console.assert(JSON.stringify(toArray(mapList(square, Node.fromArray([1, 2, 3])))) === '[1,4,9]');
  console.assert(JSON.stringify(toArray(mapList(double, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { mapList };
