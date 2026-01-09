/**
 * Solution for span.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function span(pred, list) {
  if (isEmpty(list)) {
    return [EMPTY_LIST, EMPTY_LIST];
  }

  let [first, rest] = unprepend(list);

  if (!pred(first)) {
    return [EMPTY_LIST, list];
  }

  let [left, right] = span(pred, rest);

  return [prepend(first, left), right];
}

const isPositive = (n) => n > 0;

if (require.main === module) {
  let [left, right] = span(isPositive, Node.fromArray([1, 2, -3, 4]));
  console.assert(JSON.stringify(toArray(left)) === '[1,2]');
  console.assert(JSON.stringify(toArray(right)) === '[-3,4]');

  let [l2, r2] = span(isPositive, Node.fromArray([-1, 2, 3]));
  console.assert(JSON.stringify(toArray(l2)) === '[]');
  console.assert(JSON.stringify(toArray(r2)) === '[-1,2,3]');

  let [l3, r3] = span(isPositive, Node.fromArray([1, 2, 3]));
  console.assert(JSON.stringify(toArray(l3)) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(r3)) === '[]');

  console.log('All tests passed!');
}

module.exports = { span };
