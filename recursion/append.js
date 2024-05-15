let { Node, isEmpty, unprepend, prepend, EMPTY_LIST } = require('./lists');
let { foldR } = require('./fold');

function append(list, val) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  let [first, rest] = unprepend(list);

  return prepend(first, append(rest, val));
}

function appendFoldR(list, val) {
  return foldR(list, (first, rest) => prepend(first, rest), new Node(val));
}

// let list = Node.fromArray([10, 20, 30, 40]);
// let list2 = appendFoldR(list, 99);
// console.log('list:  ', list);
// console.log('append:', list2);

module.exports = {
  append,
  appendFoldR,
};
