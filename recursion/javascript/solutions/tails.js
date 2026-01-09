/**
 * Solution for tails.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function tails(list) {
  if (isEmpty(list)) {
    return prepend(EMPTY_LIST, EMPTY_LIST);
  }

  let [first, rest] = unprepend(list);

  return prepend(list, tails(rest));
}

if (require.main === module) {
  let result = tails(Node.fromArray([1, 2, 3]));
  let tailsList = toArray(result).map((t) => (t === null ? [] : toArray(t)));
  console.assert(JSON.stringify(tailsList) === '[[1,2,3],[2,3],[3],[]]');

  let emptyResult = tails(EMPTY_LIST);
  let emptyTails = toArray(emptyResult).map((t) => (t === null ? [] : toArray(t)));
  console.assert(JSON.stringify(emptyTails) === '[[]]');

  console.log('All tests passed!');
}

module.exports = { tails };
