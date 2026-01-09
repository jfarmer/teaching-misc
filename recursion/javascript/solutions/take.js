/**
 * Solution for take.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function take(n, list) {
  if (n === 0 || isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return prepend(first, take(n - 1, rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(take(2, Node.fromArray([1, 2, 3, 4])))) === '[1,2]');
  console.assert(JSON.stringify(toArray(take(0, Node.fromArray([1, 2, 3])))) === '[]');
  console.assert(JSON.stringify(toArray(take(5, Node.fromArray([1, 2])))) === '[1,2]');
  console.assert(JSON.stringify(toArray(take(2, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { take };
