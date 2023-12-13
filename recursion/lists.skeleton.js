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
 * Given a linked list containing numbers, return the sum of its elements
 */
function sum(list) {
  // Case:
  //   List<Int> := EmptyList
  if (isEmpty(list)) {
    return 0;
  }


  // Case:
  //   List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);

  return add(first, sum(rest));
}


function multiply(x, y) {
  return x * y;
}

/**
 * Given a list of numbers, return their product.
 */
function product(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
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

  if (isRestEmpty(list)) {
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

function increment(n) {
  return n + 1;
}

/**
 * Given a list, return its length
 */
function length(list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  // return increment(length(rest));
  return 1 + length(rest);
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
 * Given a list and a value, return a new list with that value appended to it
 */
function append(list, value) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

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

/**
 * Given a list and a function, return true if the function evaluates to true
 * for EVERY value in the list and false otherwise.
 *
 * every(10 -> 20 -> 30, n % 2 === 0); // => true
 * every(1 -> 2 -> 3, n % 2 === 0); // => false
 */
function every(list, fn) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}

/**
 * Given a list and a function, return true if the function evaluates to true
 * for SOME value in the list and false otherwise.
 *
 * some(10 -> 20 -> 30, n % 2 === 1); // => false
 * some(1 -> 2 -> 3, n % 2 === 0); // => true
 */
function some(list, fn) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}


/**
 * Given two lists, produce a new lists consisting of
 * pairs of elements from each. For example:
 *
 * zip(a -> b -> c, x -> y -> z) == [a,x] -> [b,y] -> [c,z]
 *
 * Zip returns a list as long as the shortest input list
 */
function zip(left, right) {
  // Careful: when dealing w/ two lists, either one might be empty
  if (_____) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}

/**
 * Given a list and a function, return the number of elements in the
 * list for which the function returns true.
 *
 * countBy(1 -> 2 -> 3, n => n % 2 === 1); // => 2
 */
function countBy(list, fn) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}

/**
 * Given a list and a value, returns true if the list contains the
 * value and false otherwise.
 */
function contains(list, value) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}

/**
 * Given a list and a function, returns a Map where the keys
 * are the distinct return values of the function and the values
 * are arrays of items in the list which return that value.
 *
 * groupBy(1 -> 2 -> 3, n => n % 2); // => Map {0 => [2], 1 => [1,3]}
 */
function contains(list, fn) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}

/**
 * Given a list and a chunk size, split the input list into chunk-sized
 * contiguous sub-lists. The last chunk might be smaller than the chunk size.
 * Returns an array of chunks.
 *
 * chunk(1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8, 3); // => [1 -> 2 -> 3, 4 -> 5 -> 6, 7 -> 8]
 */
function chunk(list, size) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}

/**
 * Given two lists, return their concatenation as a new list.
 *
 * concat(1 -> 2 -> 3, 10 -> 20 -> 30); // 1->2->3->10->20->30
 */
function concat(left, right) {
  if (isEmpty(left)) {
    return _____;
  }

  if (isEmpty(right)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return ______;
}
