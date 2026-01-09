/**
 * Solution for dedupe.
 */

const { EMPTY_LIST, Node, isEmpty, prepend, unprepend, toArray } = require('./linkedList');

function dedupe(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  if (isEmpty(list.next)) {
    return list;
  }

  let [first, rest] = unprepend(list);
  let second = rest.value;

  if (first === second) {
    return dedupe(rest);
  }
  return prepend(first, dedupe(rest));
}

if (require.main === module) {
  console.assert(JSON.stringify(toArray(dedupe(Node.fromArray([1, 1, 2, 2, 1])))) === '[1,2,1]');
  console.assert(JSON.stringify(toArray(dedupe(Node.fromArray([1, 2, 3])))) === '[1,2,3]');
  console.assert(JSON.stringify(toArray(dedupe(Node.fromArray([1, 1, 1])))) === '[1]');
  console.assert(JSON.stringify(toArray(dedupe(EMPTY_LIST))) === '[]');

  console.log('All tests passed!');
}

module.exports = { dedupe };
