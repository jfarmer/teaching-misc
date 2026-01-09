/**
 * Solution for nth.
 */

const { Node, unprepend } = require('./linkedList');

function nth(n, list) {
  if (n === 0) {
    return list.value;
  }

  let [first, rest] = unprepend(list);

  return nth(n - 1, rest);
}

if (require.main === module) {
  console.assert(nth(0, Node.fromArray(['a', 'b', 'c'])) === 'a');
  console.assert(nth(2, Node.fromArray(['a', 'b', 'c'])) === 'c');
  console.assert(nth(1, Node.fromArray([10, 20, 30])) === 20);

  console.log('All tests passed!');
}

module.exports = { nth };
