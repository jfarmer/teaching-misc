let {isEmpty, unprepend} = require('./lists');

function and(x, y) {
  return x && y;
}
/**
 * Given a list and a function, return true if the function returns true
 * for every element of the list.
 */
function every(list, fn) {
  if (isEmpty(list)) {
    return true;
  }

  let [first, rest] = unprepend(list);

  return and(fn(first), every(rest, fn));
}

module.exports = {
  and,
  every,
}
