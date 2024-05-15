let { isEmpty, unprepend } = require('./lists');

function multiply(x, y) {
  return x * y;
}

/**
 * Given a list of numbers, return their product.
 */
function product(list) {
  if (isEmpty(list)) {
    return 1;
  }

  let [first, rest] = unprepend(list);

  return multiply(first, product(rest));
}

function productL(list, res = 1) {
  if (isEmpty(list)) {
    return res;
  }

  let [first, rest] = unprepend(list);

  return product(rest, multiply(res, first));
}

module.exports = {
  multiply,
  product,
  productL,
};
