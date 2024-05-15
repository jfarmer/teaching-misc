let { Node, isEmpty, unprepend, prepend, EMPTY_LIST } = require('./lists');
let { append } = require('./append');
let { foldL, foldR } = require('./fold');

/**
 * Given a list, return a reversed copy of the list.
 */
function reverse(list, result = EMPTY_LIST) {
  if (isEmpty(list)) {
    return result;
  }

  let [first, rest] = unprepend(list);

  return reverse(rest, prepend(first, result));
}

/**
 * Like reverse, but uses append instead of prepend.
 * Inefficient for linked lists.
 */
function reverseBad(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return append(reverse(rest), first);
}

function reverseFoldLeft(list) {
  return foldL(list, (result, item) => prepend(item, result), EMPTY_LIST);
}

function reverseFoldRight(list) {
  return foldR(list, (item, result) => append(result, item), EMPTY_LIST);
}

module.exports = {
  reverse,
  reverseBad,
  reverseFoldLeft,
  reverseFoldRight,
};
