/**
 * Solution for indexed.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function indexed(list) {
  function helper(list, idx) {
    if (isEmpty(list)) {
      return EMPTY_LIST;
    }

    let [first, rest] = unprepend(list);

    return prepend([idx, first], helper(rest, idx + 1));
  }

  return helper(list, 0);
}

if (require.main === module) {
  let result = toArray(indexed(Node.fromArray(['a', 'b', 'c'])));
  console.assert(JSON.stringify(result) === '[[0,"a"],[1,"b"],[2,"c"]]');

  console.assert(JSON.stringify(toArray(indexed(EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { indexed };
