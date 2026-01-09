/**
 * Solution for foldl.
 *
 * Left fold: processes left-to-right.
 *
 * foldl(f, z, [a, b, c]) = f(f(f(z, a), b), c)
 */

const { EMPTY_LIST, Node, isEmpty, unprepend } = require('./linkedList');

function foldl(fn, acc, list) {
  if (isEmpty(list)) {
    return acc;
  }

  let [first, rest] = unprepend(list);

  return foldl(fn, fn(acc, first), rest);
}

if (require.main === module) {
  // For associative operations, foldl and foldr give same result
  console.assert(foldl((acc, x) => acc + x, 0, Node.fromArray([1, 2, 3, 4, 5])) === 15);
  console.assert(foldl((acc, x) => acc * x, 1, Node.fromArray([1, 2, 3, 4, 5])) === 120);

  // For non-associative operations, order matters
  // foldl(-, 0, [1,2,3]) = ((0-1)-2)-3 = -6
  console.assert(foldl((acc, x) => acc - x, 0, Node.fromArray([1, 2, 3])) === -6);

  // Building a list: foldl reverses, foldr preserves
  // foldl with prepend: (([] . 1) . 2) . 3 = [3, 2, 1]
  const { prepend, toArray } = require('./linkedList');
  let reversed = foldl((acc, x) => prepend(x, acc), EMPTY_LIST, Node.fromArray([1, 2, 3]));
  console.assert(JSON.stringify(toArray(reversed)) === '[3,2,1]');

  console.log('All tests passed!');
}

module.exports = { foldl };
