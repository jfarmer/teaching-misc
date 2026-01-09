/**
 * Solution for zipWith.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function zipWith(fn, list1, list2) {
  if (isEmpty(list1) || isEmpty(list2)) {
    return EMPTY_LIST;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return prepend(fn(first1, first2), zipWith(fn, rest1, rest2));
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

if (require.main === module) {
  console.assert(JSON.stringify(toArray(zipWith(add, Node.fromArray([1, 2, 3]), Node.fromArray([10, 20])))) === '[11,22]');
  console.assert(JSON.stringify(toArray(zipWith(multiply, Node.fromArray([1, 2, 3]), Node.fromArray([10, 20, 30])))) === '[10,40,90]');
  console.assert(JSON.stringify(toArray(zipWith(add, EMPTY_LIST, Node.fromArray([1, 2])))) === '[]');

  console.log('All tests passed!');
}

module.exports = { zipWith };
