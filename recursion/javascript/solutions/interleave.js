/**
 * Solution for interleave.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function interleave(list1, list2) {
  if (isEmpty(list1)) {
    return list2;
  }

  let [first, rest] = unprepend(list1);

  return prepend(first, interleave(list2, rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(interleave(Node.fromArray([1, 2, 3]), Node.fromArray(['a', 'b', 'c'])))) === '[1,"a",2,"b",3,"c"]');
  console.assert(JSON.stringify(toArray(interleave(Node.fromArray([1, 2]), Node.fromArray(['a'])))) === '[1,"a",2]');
  console.assert(JSON.stringify(toArray(interleave(EMPTY_LIST, Node.fromArray(['a', 'b'])))) === '["a","b"]');

  console.log('All tests passed!');
}

module.exports = { interleave };
