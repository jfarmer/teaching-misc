const util = require('util');

const EMPTY_LIST = null;

class Node {
  // Helper method to generate a linked list from an array
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

function add(x, y) {
  return x + y;
}

/**
 * Given a list of numbers, return their sum.
 */
function sum(list) {
  // List<Int> := EmptyList
  if (isEmpty(list)) {
    return 0;
  }

  // List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);

  return add(first, sum(rest));
}

let list = Node.fromArray([10, 20, 30, -1]);

// console.log('list:    ', list);
// console.log('sum:     ', sum(list));
// console.log('product: ', product(list));
// console.log('largest: ', largest(list));
// console.log('reverse: ', reverse(list));
// console.log('append:  ', append(list, 200));
// console.log('odds:    ', filter(list, x => x % 2 !== 0));
// console.log('double:  ', map(list, x => x * 2));
// console.log('everyNeg:', every(list, x => x < 0));
// console.log('someNeg: ', some(list, x => x < 0));
// console.log('maxByAbs:', maxBy(list, x => Math.abs(x)));
// console.log('zip:     ', zip(list, list2));
// console.log('groupBy: ', groupBy(list, x => x % 2 === 0));

// console.log('revBad:  ', reverseBad(list));
// console.log('reverseA:', reverseA(list));

function template(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}


/**
 * Given a list of numbers, return their product, i.e.,
 * multiply them together.
 */
function product(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Given a list of numbers, returns the largest number in the list.
 */
function largest(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Returns a reversed copy of the given list, i.g.,
 *
 *   reverse(10 -> 20 -> 30) == 30 -> 20 -> 10
 */
function reverse(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return a new list that looks like the old list w/ the
 * given value appended to the end.
 */
function append(value, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}
