/**
 * Solution for isPrefixOf.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function isPrefixOf(prefix, list) {
  if (isEmpty(prefix)) {
    return true;
  }

  if (isEmpty(list)) {
    return false;
  }

  let [firstP, restP] = unprepend(prefix);
  let [firstL, restL] = unprepend(list);

  return firstP === firstL && isPrefixOf(restP, restL);
}

if (require.main === module) {
  console.assert(isPrefixOf(Node.fromArray([1, 2]), Node.fromArray([1, 2, 3])) === true);
  console.assert(isPrefixOf(Node.fromArray([1, 3]), Node.fromArray([1, 2, 3])) === false);
  console.assert(isPrefixOf(EMPTY_LIST, Node.fromArray([1, 2, 3])) === true);
  console.assert(isPrefixOf(Node.fromArray([1, 2, 3]), Node.fromArray([1, 2])) === false);

  console.log('All tests passed!');
}

module.exports = { isPrefixOf };
