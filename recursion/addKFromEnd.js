let {isEmpty, prepend, unprepend} = require('./lists');

/**
 *
 */
function addKFromEndWithLength(list, k) {
  if (isEmpty(head)) {
    return [head, 0];
  }

  let [first, rest] = unprepend(list)

  let [restPlusK, length] = addKFromEndWithLength(rest, k);

  if ((length + 1) % k === 0) {
    return [prepend(first + k, restPlusK), length + 1]
  } else {
    return [prepend(first, restPlusK), length + 1]
  }
}

/**
 * Given a list of numbers and a number k, return a new list with
 * k added to every k-th element of the list (from the end)
 */
function addKFromEnd(head, k) {
  let [result, length] = addKFromEndWithLength(head, k);

  return result;
}

module.exports = {
  addKFromEnd,
  addKFromEndWithLength
}
