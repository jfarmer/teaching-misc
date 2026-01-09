/**
 * Solution for chunksOf.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');
const { take } = require('./take');
const { drop } = require('./drop');

function chunksOf(n, list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let chunk = take(n, list);
  let remaining = drop(n, list);

  return prepend(chunk, chunksOf(n, remaining));
}

if (require.main === module) {
  let result = chunksOf(2, Node.fromArray([1, 2, 3, 4, 5]));
  let chunks = toArray(result).map(toArray);
  console.assert(JSON.stringify(chunks) === '[[1,2],[3,4],[5]]');

  let result2 = chunksOf(3, Node.fromArray([1, 2]));
  let chunks2 = toArray(result2).map(toArray);
  console.assert(JSON.stringify(chunks2) === '[[1,2]]');

  console.assert(JSON.stringify(toArray(chunksOf(2, EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { chunksOf };
