/**
 * Solution for filterList.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function filterList(pred, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  if (pred(first)) {
    return prepend(first, filterList(pred, rest));
  }
  return filterList(pred, rest);
}

const isEven = (n) => n % 2 === 0;
const isPositive = (n) => n > 0;

if (require.main === module) {
  console.assert(JSON.stringify(toArray(filterList(isEven, Node.fromArray([1, 2, 3, 4])))) === '[2,4]');
  console.assert(JSON.stringify(toArray(filterList(isEven, Node.fromArray([1, 3, 5])))) === '[]');
  console.assert(JSON.stringify(toArray(filterList(isEven, EMPTY_LIST))) === '[]');
  console.assert(JSON.stringify(toArray(filterList(isPositive, Node.fromArray([-1, 0, 1, 2])))) === '[1,2]');

  console.log('All tests passed!');
}

module.exports = { filterList };
