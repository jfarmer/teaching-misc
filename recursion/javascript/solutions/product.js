/**
 * Solution for product.
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function product(list) {
  if (isEmpty(list)) {
    return 1;
  }

  let [first, rest] = unprepend(list);

  return first * product(rest);
}

if (require.main === module) {
  console.assert(product(Node.fromArray([2, 3, 4])) === 24);
  console.assert(product(Node.fromArray([1, 2, 3, 4, 5])) === 120);
  console.assert(product(Node.fromArray([5])) === 5);
  console.assert(product(EMPTY_LIST) === 1);
  console.assert(product(Node.fromArray([0, 1, 2])) === 0);
  console.assert(product(Node.fromArray([-1, 2, -3])) === 6);

  console.log('All tests passed!');
}

module.exports = { product };
