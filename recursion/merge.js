let { isEmpty, prepend, unprepend } = require('./lists');

function merge(left, right) {
  if (isEmpty(left)) {
    return right;
  }

  if (isEmpty(right)) {
    return left;
  }

  let [leftFirst, leftRest] = unprepend(left);
  let [rightFirst, rightRest] = unprepend(right);

  if (leftFirst < rightFirst) {
    return prepend(leftFirst, merge(leftRest, right));
  } else {
    return prepend(rightFirst, merge(left, rightRest));
  }
}

module.exports = {
  merge,
};
