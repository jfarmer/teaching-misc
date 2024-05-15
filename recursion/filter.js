let { isEmpty, prepend, unprepend } = require('./lists');

function prependIfCheck(val, list, checkFn) {
  if (checkFn(val)) {
    return prepend(val, list);
  } else {
    return list;
  }
}

/**
 * Given a list and a function checkFn, return a new list containing
 * only the elements of the original list for which checkFn returns true.
 */
function filter(list, checkFn) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return prependIfCheck(first, filter(rest, checkFn), checkFn);
}

module.exports = {
  prependIfCheck,
  filter,
};
