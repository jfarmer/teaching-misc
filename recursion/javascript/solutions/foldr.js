/**
 * Solution for foldr.
 *
 * This IS the template. Every recursive list function can be written as a foldr.
 *
 * foldr(f, z, [a, b, c]) = f(a, f(b, f(c, z)))
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function foldr(fn, acc, list) {
  if (isEmpty(list)) {
    return acc;
  }

  let [first, rest] = unprepend(list);

  return fn(first, foldr(fn, acc, rest));
}

// Once you have foldr, everything else is a one-liner:
const sum = (list) => foldr((x, acc) => x + acc, 0, list);
const product = (list) => foldr((x, acc) => x * acc, 1, list);
const length = (list) => foldr((x, acc) => 1 + acc, 0, list);
const map = (fn, list) => foldr((x, acc) => prepend(fn(x), acc), EMPTY_LIST, list);
const filter = (pred, list) => foldr((x, acc) => (pred(x) ? prepend(x, acc) : acc), EMPTY_LIST, list);
const every = (pred, list) => foldr((x, acc) => pred(x) && acc, true, list);
const some = (pred, list) => foldr((x, acc) => pred(x) || acc, false, list);

if (require.main === module) {
  // Direct foldr tests
  console.assert(foldr((x, acc) => x + acc, 0, Node.fromArray([1, 2, 3, 4, 5])) === 15);
  console.assert(foldr((x, acc) => x * acc, 1, Node.fromArray([1, 2, 3, 4, 5])) === 120);

  // Derived function tests
  console.assert(sum(Node.fromArray([1, 2, 3])) === 6);
  console.assert(product(Node.fromArray([2, 3, 4])) === 24);
  console.assert(length(Node.fromArray([1, 2, 3, 4])) === 4);
  console.assert(JSON.stringify(toArray(map((x) => x * 2, Node.fromArray([1, 2, 3])))) === '[2,4,6]');
  console.assert(JSON.stringify(toArray(filter((x) => x % 2 === 0, Node.fromArray([1, 2, 3, 4])))) === '[2,4]');
  console.assert(every((x) => x > 0, Node.fromArray([1, 2, 3])) === true);
  console.assert(some((x) => x < 0, Node.fromArray([1, -2, 3])) === true);

  console.log('All tests passed!');
}

module.exports = { foldr };
