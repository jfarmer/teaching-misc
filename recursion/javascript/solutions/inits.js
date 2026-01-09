/**
 * Solution for inits.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');
const { mapList } = require('./mapList');

function inits(list) {
  if (isEmpty(list)) {
    return prepend(EMPTY_LIST, EMPTY_LIST);
  }

  let [first, rest] = unprepend(list);

  return prepend(EMPTY_LIST, mapList((prefix) => prepend(first, prefix), inits(rest)));
}

if (require.main === module) {
  let result = inits(Node.fromArray([1, 2, 3]));
  let initsList = toArray(result).map((t) => (t === null ? [] : toArray(t)));
  console.assert(JSON.stringify(initsList) === '[[],[1],[1,2],[1,2,3]]');

  let emptyResult = inits(EMPTY_LIST);
  let emptyInits = toArray(emptyResult).map((t) => (t === null ? [] : toArray(t)));
  console.assert(JSON.stringify(emptyInits) === '[[]]');

  console.log('All tests passed!');
}

module.exports = { inits };
