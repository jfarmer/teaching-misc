/**
 * Solution for drop.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend, toArray } = require('./linkedList');

function drop(n, list) {
  if (n === 0 || isEmpty(list)) {
    return list;
  }

  let [first, rest] = unprepend(list);

  return drop(n - 1, rest);
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(drop(2, Node.fromArray([1, 2, 3, 4])))) === '[3,4]');
  console.assert(JSON.stringify(toArray(drop(0, Node.fromArray([1, 2, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(drop(5, Node.fromArray([1, 2])))) === '[]');
  console.assert(JSON.stringify(toArray(drop(2, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { drop };
