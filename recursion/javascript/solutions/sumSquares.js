/**
 * Solution for sumSquares.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function sumSquares(list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  return first * first + sumSquares(rest);
}

if (require.main === module) {
  console.assert(sumSquares(Node.fromArray([1, 2, 3])) === 14);
  console.assert(sumSquares(Node.fromArray([1, 2, 3, 4])) === 30);
  console.assert(sumSquares(Node.fromArray([5])) === 25);
  console.assert(sumSquares(EMPTY_LIST) === 0);

  console.log('All tests passed!');
}

module.exports = { sumSquares };
