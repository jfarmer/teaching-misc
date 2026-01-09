/**
 * Solution for none.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function none(pred, list) {
  if (isEmpty(list)) {
    return true;
  }

  let [first, rest] = unprepend(list);

  return !pred(first) && none(pred, rest);
}

const isNegative = (n) => n < 0;

if (require.main === module) {
  console.assert(none(isNegative, Node.fromArray([1, 2, 3])) === true);
  console.assert(none(isNegative, Node.fromArray([1, -2, 3])) === false);
  console.assert(none(isNegative, EMPTY_LIST) === true);

  console.log('All tests passed!');
}

module.exports = { none };
