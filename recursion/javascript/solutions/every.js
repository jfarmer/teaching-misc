/**
 * Solution for every.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function every(pred, list) {
  if (isEmpty(list)) {
    return true;
  }

  let [first, rest] = unprepend(list);

  return pred(first) && every(pred, rest);
}

const isPositive = (n) => n > 0;
const isEven = (n) => n % 2 === 0;

if (require.main === module) {
  console.assert(every(isPositive, Node.fromArray([1, 2, 3])) === true);
  console.assert(every(isPositive, Node.fromArray([1, -2, 3])) === false);
  console.assert(every(isPositive, EMPTY_LIST) === true);
  console.assert(every(isEven, Node.fromArray([2, 4, 6])) === true);
  console.assert(every(isEven, Node.fromArray([2, 3, 4])) === false);

  console.log('All tests passed!');
}

module.exports = { every };
