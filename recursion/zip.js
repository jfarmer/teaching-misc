let {isEmpty, unprepend, prepend, EMPTY_LIST} = require('./lists');

/**
 * Given two lists, produce a new lists consisting of
 * pairs of elements from each. For example:
 *
 * zip(a -> b -> c, x -> y -> z) == [a,x] -> [b,y] -> [c,z]
 *
 * Zip returns a list as long as the shortest input list
 */
function zip(left, right) {
  if (isEmpty(left) || isEmpty(right)) {
    return EMPTY_LIST;
  }

  let [leftFirst, leftRest] = unprepend(left);
  let [rightFirst, rightRest] = unprepend(right);

  return prepend([leftFirst, rightFirst], zip(leftRest, rightRest));
}

module.exports = {
  zip,
};
