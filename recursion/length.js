let {isEmpty, unprepend} = require('./lists');

function increment(x) {
  return x + 1;
}

/**
 * Given a list, return its length
 */
function length(list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  return increment(length(rest));
}

module.exports = {
  increment,
  length,
};
