/**
 * Solution for init.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function init(list) {
  if (isEmpty(list.next)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return prepend(first, init(rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(init(Node.fromArray([1, 2, 3])))) === '[1,2]');
  console.assert(JSON.stringify(toArray(init(Node.fromArray([42])))) === '[]');
  console.assert(JSON.stringify(toArray(init(Node.fromArray([1, 2, 3, 4, 5])))) === '[1,2,3,4]');

  console.log('All tests passed!');
}

module.exports = { init };
