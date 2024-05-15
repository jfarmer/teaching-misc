let { isEmpty, unprepend } = require('./list');

function add(x, y) {
  return x + y;
}

/**
 * Given a list of numbers, return their sum.
 */
function sum(list) {
  // List<Int> := EmptyList
  if (isEmpty(list)) {
    return 0;
  }

  // List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);

  return add(first, sum(rest));
}

function sumL(list, res = 0) {
  if (isEmpty(list)) {
    return res;
  }

  let [first, rest] = unprepend(list);

  return sumL(rest, add(res, first));
}

function sumIter(list) {
  let current = list;
  let res = 0;

  while (!isEmpty(current)) {
    res = add(res, current.value);
    current = current.next;
  }

  return res;
}

module.exports = {
  add,
  sum,
  sumL,
  sumIter,
};
