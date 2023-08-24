const util = require('util');

const EMPTY_LIST = null;

class Node {
  static fromArray(array) {
    if (array.length === 0) {
      return EMPTY_LIST;
    }

    let [first, ...rest] = array;

    return prepend(first, Node.fromArray(rest));
  }

  constructor(value, next = EMPTY_LIST) {
    this.value = value;
    this.next = next;
  }

  toString() {
    // Use an external function so we can display empty lists as "()"
    // rather than "null"
    return listToString(this);
  }

  // Changes how instances are displayed in the Node console/repl
  // This is like Python's __repr__ magic method and is Node-specific
  [util.inspect.custom]() {
    return this.toString();
  }

  *[Symbol.iterator]() {
    yield this.value;

    if (!isEmpty(this.next)){
      yield* this.next;
    }
  }
}

function listToString(list) {
  if (isEmpty(list)) {
    return '()';
  }

  let [first, rest] = unprepend(list);

  return `${first} -> ${listToString(rest)}`;
}

function isEmpty(list) {
  return list === EMPTY_LIST;
}

function isRestEmpty(list) {
  return isEmpty(list) || isEmpty(list.next);
}

function prepend(val, list) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  return new Node(val, list);
}

function unprepend(list) {
  return [list.value, list.next];
}

// Left vs right fold
//
// foldLeft([10, 20, 30], add, 0)  == add(add(add(0, 10), 20), 30)
//                                 == (((0 + 10) + 20) + 30)
//
// foldRight([10, 20, 30], add, 0) == add(10, add(20, add(30, 0)))
//                                 == (10 + (20 + (30 + 0)))
//
// foldLeft and foldRight differ in how they group operations w/ parantheses, i.e.,
// which pairwise operations are performed first.
// foldLeft performs operation starting from left-most elements
// foldRight performs operation starting from right-most elements
//
// If fn is associative then foldLeft and foldRight will return the same result
// Otherwise, one is often more efficient than the other depending on what structure
// you're folding over.
//
// Linked lists like "prepend" and foldRight is prepend-friendly
// Arrays like "append" and foldLeft is append-friendly


// let list = Node.fromArray([10, 21, 30, -17, 40, -109]);
// let list2 = Node.fromArray(['one', 'two']);

// console.log('list:    ', list);
// console.log('sum:     ', sum(list));
// console.log('max:     ', max(list));
// console.log('odds:    ', filter(list, x => x % 2 !== 0));
// console.log('double:  ', map(list, x => x * 2));
// console.log('everyNeg:', every(list, x => x < 0));
// console.log('someNeg: ', some(list, x => x < 0));
// console.log('maxByAbs:', maxBy(list, x => Math.abs(x)));
// console.log('reverse: ', reverse(list));
// console.log('revBad:  ', reverseBad(list));
// console.log('reverseA:', reverseA(list));
// console.log('append:  ', append(list, 200));
// console.log('zip:     ', zip(list, list2));
// console.log('groupBy: ', groupBy(list, x => x % 2 === 0));

module.exports = {
  Node,
  prepend,
  unprepend,
  append,
  EMPTY_LIST,
  listToString,
  isEmpty,
  isRestEmpty,
};
