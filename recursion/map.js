let {isEmpty, unprepend} = require('./lists');
let {foldR} = require('./fold');

/**
 * Given a list and a function, return a new list where each element
 * is the result of applying the function to the corresponding element.
 *
 * map(a -> b -> c, fn) == fn(a) -> fn(b) -> fn(c)
 */
function map(list, fn) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return prepend(fn(first), map(rest, fn));
}

function mapFoldR(list, fn) {
  return foldR(
    list,
    (value, rest) => prepend(fn(value), map(rest, fn)),
    EMPTY_LIST
  );
}

module.exports = {
  map,
  mapFoldR,
}
