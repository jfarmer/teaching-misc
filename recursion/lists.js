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

function isSingleton(list) {
  return isEmpty(list) || isEmpty(list.next);
}

function prepend(val, list) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  return new Node(val, list);
}

function append(list, val) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  let [first, rest] = unprepend(list);

  return prepend(first, append(rest, val));
}

function unprepend(list) {
  return [list.value, list.next];
}

function increment(x) {
  return x + 1;
}

/**
 * Given a list, return its length
 */
function length(list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  return increment(length(rest));
}

function lengthA(list) {
  return accumulate(list, increment, 0);
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
  if (isSingleton(list)) {
    return list.value;
  }

  let [first, rest] = unprepend(list);

  return larger(first, max(rest));
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
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list)

  return prependIfCheck(first, filter(rest, checkFn), checkFn);
}


function and(x, y) {
  return x && y;
}
/**
 * Given a list and a function, return true if the function returns true
 * for every element of the list.
 */
function every(list, fn) {
  if (isEmpty(list)) {
    return true;
  }

  let [first, rest] = unprepend(list);

  return and(fn(first), every(rest, fn));
}

function or(x, y) {
  return x || y;
}

/**
 * Given a list and a function, return true if the function returns
 * true for at least one element of the list.
 */
function some(list, fn) {
  if (isEmpty(list)) {
    return false;
  }

  let [first, rest] = unprepend(list);

  return or(fn(first), some(rest, fn));
}


function largerBy(x, y, fn) {
  if (fn(x) > fn(y))  {
    return x;
  } else {
    return y;
  }
}
/**
 * Given a list and a function, return the element of list for which
 * the function is largest.
 */
function maxBy(list, fn) {
  if (isSingleton(list)) {
    return list.value;
  }

  let [first, rest] = unprepend(list);

  return largerBy(fn(first), maxBy(rest, fn), fn);
}

/**
 * Given a list and a function, return a new list where each element
 * is the result of applying the function to the corresponding element.
 *
 * map(a -> b -> c, fn) == fn(a) -> fn(b) -> fn(c)
 */
function map(list, fn) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return prepend(fn(first), map(rest, fn));
}

/**
 * Given a list, return a reversed copy of the list.
 */
function reverse(list, result = EMPTY_LIST) {
  if (isEmpty(list)) {
    return result;
  }

  let [first, rest] = unprepend(list);

  return reverse(rest, prepend(first, result));
}

/**
 * Like reverse, but uses append instead of prepend.
 * Inefficient for linked lists.
 */
function reverseBad(list) {
  if (isEmpty(list)) {
    return EMPTY_LIST;
  }

  let [first, rest] = unprepend(list);

  return append(reverse(rest), first);
}

function reverseA(list) {
  return accumulateLeft(list, (result, item) => prepend(item, result), null);
}

function accumulate(list, fn, initial) {
  if (isEmpty(list)) {
    return initial;
  }

  let [first, rest] = unprepend(list);

  return fn(first, accumulate(rest, fn, initial));
}

// accumulate above is really "foldRight" / "reduceRight"
let accumulateRight = accumulate;

// Here is "foldLeft" / "reduceLeft" (usually just reduce)
function accumulateLeft(list, fn, initial) {
  if (isEmpty(list)) {
    return initial;
  }

  let [first, rest] = unprepend(list);

  return accumulateLeft(rest, fn, fn(initial, first));
}

function zip(left, right) {
  if (isEmpty(left) || isEmpty(right)) {
    return EMPTY_LIST;
  }

  let [leftFirst, leftRest] = unprepend(left);
  let [rightFirst, rightRest] = unprepend(right);

  return prepend([leftFirst, rightFirst], zip(leftRest, rightRest));
}

function groupIntoMap(map, key, value) {
  return map.set(key, (map.get(key) || []).concat(value));
}
function groupBy(list, fn) {
  if (isEmpty(list)) {
    return new Map();
  }

  let [first, rest] = unprepend(list);

  // This is noisy but only because JavaScript's Map
  // doesn't support default values.
  let key = fn(first);
  let restGroup = groupBy(rest, fn);

  if (!restGroup.has(key)) {
    restGroup.set(key, []);
  }

  return restGroup.set(key, restGroup.get(key).concat(first))

  return groupIntoMap(groupBy(rest, fn), fn(first), first);
}

function mapA(list, fn) {
  return accumulate(list, (item, result) => prepend(fn(item), result), null);
}

// Left vs right fold
//
//  foldLeft([10, 20, 30], add, 0) == add(add(add(0, 10), 20), 30)
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
// Linked lists like "prepend" and foldRight is prepend-friendly
// Arrays like "append" and foldLeft is append-friendly


let list = Node.fromArray([10, 21, 30, -17, 40, -109]);
let list2 = Node.fromArray(['one', 'two']);

console.log('list:    ', list);
console.log('sum:     ', sum(list));
console.log('max:     ', max(list));
console.log('odds:    ', filter(list, x => x % 2 !== 0));
console.log('double:  ', map(list, x => x * 2));
console.log('everyNeg:', every(list, x => x < 0));
console.log('someNeg: ', some(list, x => x < 0));
console.log('maxByAbs:', maxBy(list, x => Math.abs(x)));
console.log('reverse: ', reverse(list));
console.log('revBad:  ', reverseBad(list));
console.log('reverseA:', reverseA(list));
console.log('append:  ', append(list, 200));
console.log('zip:     ', zip(list, list2));
console.log('groupBy: ', groupBy(list, x => x % 2 === 0));
