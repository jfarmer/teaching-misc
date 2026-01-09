/**
 * Solution for some.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function some(pred, list) {
  if (isEmpty(list)) {
    return false;
  }

  let [first, rest] = unprepend(list);

  return pred(first) || some(pred, rest);
}

const isNegative = (n) => n < 0;
const isEven = (n) => n % 2 === 0;

if (require.main === module) {
  console.assert(some(isNegative, Node.fromArray([1, 2, 3])) === false);
  console.assert(some(isNegative, Node.fromArray([1, -2, 3])) === true);
  console.assert(some(isNegative, EMPTY_LIST) === false);
  console.assert(some(isEven, Node.fromArray([1, 3, 5])) === false);
  console.assert(some(isEven, Node.fromArray([1, 2, 3])) === true);

  console.log('All tests passed!');
}

module.exports = { some };
