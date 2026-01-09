/**
 * Solution for zipLists.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function zipLists(list1, list2) {
  if (isEmpty(list1) || isEmpty(list2)) {
    return EMPTY_LIST;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return prepend([first1, first2], zipLists(rest1, rest2));
}

if (require.main === module) {
  let result = toArray(zipLists(Node.fromArray([1, 2, 3]), Node.fromArray(['a', 'b'])));
  console.assert(JSON.stringify(result) === '[[1,"a"],[2,"b"]]');

  console.assert(JSON.stringify(toArray(zipLists(EMPTY_LIST, Node.fromArray([1, 2])))) === '[]');
  console.assert(JSON.stringify(toArray(zipLists(Node.fromArray([1, 2]), EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { zipLists };
