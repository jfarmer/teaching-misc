/**
 * Solution for flatten.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');
const { concat } = require('./concat');

function flatten(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return concat(first, flatten(rest));
}

if (require.main === module) {
  let nested = Node.fromArray([
    Node.fromArray([1, 2]),
    Node.fromArray([3]),
    Node.fromArray([4, 5]),
  ]);
  console.assert(JSON.stringify(toArray(flatten(nested))) === '[1,2,3,4,5]');

  let withEmpty = Node.fromArray([EMPTY_LIST, Node.fromArray([1, 2]), EMPTY_LIST]);
  console.assert(JSON.stringify(toArray(flatten(withEmpty))) === '[1,2]');

  console.assert(JSON.stringify(toArray(flatten(EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { flatten };
