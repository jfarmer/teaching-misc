let { isEmpty, unprepend } = require('./lists');

function larger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

/**
 * Given a list of comparable things (e.g., numbers, strings), return
 * the largest element.
 */
function max(list) {
  if (isEmpty(list)) {
    return -Infinity;
  }

  // Or if we only want to handle non-empty lists:
  // if (isRestEmpty(list)) {
  //   return list.value;
  // }

  let [first, rest] = unprepend(list);

  return larger(first, max(rest));
}

module.exports = {
  larger,
  max,
};
