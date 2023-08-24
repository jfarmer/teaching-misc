let {isEmpty, unprepend} = require('./lists');

function or(x, y) {
  return x || y;
}

/**
 * Given a list and a function, return true if the function returns
 * true for at least one element of the list.
 */
function some(list, fn) {
  if (isEmpty(list)) {
    return false;
  }

  let [first, rest] = unprepend(list);

  return or(fn(first), some(rest, fn));
}

module.exports = {
  or,
  some,
}
