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

function isSingleton(list) {
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
 * Given a linked list containing numbers, return the sum of its elements
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

function max(list) {
  if (array.length ===  ____) {
    return ____;
  }

  let [first, ...rest] = array;

  return ____;
}

function multiply(x, y) {
  return x * y;
}

/**
 * Given a list of numbers, return their product.
 */
function product(list) {
  if (isEmpty(list)) {
    return 1;
  }

  let [first, rest] = unprepend(list);

  return multiply(first, product(rest));
}

function larger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

/**
 * Given a list of comparable things (e.g., numbers, strings), return
 * the largest element.
 */
function max(list) {
  // It's possible to handle an empty list, but think about how to
  // handle the one-element list first. We can always declare that
  // "max" requires non-empty lists by throwing an error when isEmpty

  if (isSingleton(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  // Other logic can go here

  return _____;
}

function prependIfCheck(val, list, checkFn) {
  if (checkFn(val)) {
    return prepend(val, list);
  } else {
    return list;
  }
}

/**
 * Given a list and a function checkFn, return a new list containing
 * only the elements of the original list for which checkFn returns true.
 */
function filter(list, checkFn) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  // Other logic can go here

  return _____;
}

/**
 * Given a list, return a reversed copy of the list.
 */
function reverse(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  // Other logic can go here
  // What are common ways of adding something to a list?
  // Each "way" is an operation. For each "way", can
  // you think of how to reverse a list using only that operation?

  return _____;
}

/**
 * Given a list and a function, return a new list where each element
 * is the result of applying the function to the corresponding element.
 *
 * map(a -> b -> c, fn) == fn(a) -> fn(b) -> fn(c)
 *
 * let list = Node.fromArray([11,22,33]);
 * map(list, x => x * 2); // returns 22 -> 44 -> 66
 */
function map(list, fn) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}
