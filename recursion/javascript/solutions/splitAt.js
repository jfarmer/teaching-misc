/**
 * Solution for splitAt.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function splitAt(n, list) {
  if (n === 0 || isEmpty(list)) {
    return [EMPTY_LIST, list];
  }

  let [first, rest] = unprepend(list);
  let [left, right] = splitAt(n - 1, rest);

  return [prepend(first, left), right];
}

if (require.main === module) {
  let [left, right] = splitAt(2, Node.fromArray([1, 2, 3, 4]));
  console.assert(JSON.stringify(toArray(left)) === '[1,2]');
  console.assert(JSON.stringify(toArray(right)) === '[3,4]');

  let [l2, r2] = splitAt(0, Node.fromArray([1, 2, 3]));
  console.assert(JSON.stringify(toArray(l2)) === '[]');
  console.assert(JSON.stringify(toArray(r2)) === '[1,2,3]');

  let [l3, r3] = splitAt(5, Node.fromArray([1, 2]));
  console.assert(JSON.stringify(toArray(l3)) === '[1,2]');
  console.assert(JSON.stringify(toArray(r3)) === '[]');

  console.log('All tests passed!');
}

module.exports = { splitAt };
