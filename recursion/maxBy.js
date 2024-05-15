let { isEmpty, isRestEmpty, unprepend } = require('./lists');

function largerBy(x, y, fn) {
  if (fn(x) > fn(y)) {
    return x;
  } else {
    return y;
  }
}
/**
 * Given a list and a function, return the element of list for which
 * the function is largest.
 */
function maxBy(list, fn) {
  if (isEmpty(list)) {
    throw new TypeError('`list` cannot be empty');
  }

  if (isRestEmpty(list)) {
    return list.value;
  }

  let [first, rest] = unprepend(list);

  return largerBy(fn(first), maxBy(rest, fn), fn);
}

module.exports = {
  largerBy,
  maxBy,
};
