/**
 * Recursive Linked List Exercises
 * ===============================
 *
 * All exercises follow the same template (which is foldr in disguise):
 *
 *     function template(list) {
 *       if (isEmpty(list)) {
 *         return _____;           // Base case
 *       }
 *
 *       let [first, rest] = unprepend(list);
 *       return _____;             // Combine first with recursive result
 *     }
 *
 * Fill in the blanks (_____) to complete each function.
 *
 * Hint: Think about:
 *   1. What should the answer be for an empty list?
 *   2. If I have `first` and the answer for `rest`, how do I combine them?
 */

const util = require('node:util');

// =============================================================================
// LINKED LIST INFRASTRUCTURE
// =============================================================================

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
    return listToString(this);
  }

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

function prepend(val, list) {
  return new Node(val, list);
}

function unprepend(list) {
  return [list.value, list.next];
}

// =============================================================================
// EXAMPLE: SUM (fully implemented as reference)
// =============================================================================

/**
 * Given a linked list of numbers, return their sum.
 *
 * sumList(1 -> 2 -> 3) => 6
 * sumList(()) => 0
 */
function sumList(list) {
  if (isEmpty(list)) {
    return 0;
  }

  let [first, rest] = unprepend(list);

  return first + sumList(rest);
}

// =============================================================================
// NUMERIC AGGREGATIONS
// =============================================================================

/**
 * Given a list of numbers, return their product.
 *
 * product(2 -> 3 -> 4) => 24
 * product(()) => ???
 */
function product(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Given a non-empty list of numbers, return the largest.
 *
 * largest(3 -> 7 -> 2) => 7
 *
 * Note: You can assume the list is non-empty.
 */
function largest(list) {
  // Base case: single element list
  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Given a non-empty list of numbers, return the smallest.
 *
 * smallest(3 -> 7 -> 2) => 2
 */
function smallest(list) {
  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return the number of elements in the list.
 *
 * length(a -> b -> c) => 3
 * length(()) => ???
 */
function length(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return the sum of squares of all elements.
 *
 * sumSquares(1 -> 2 -> 3) => 1 + 4 + 9 = 14
 * sumSquares(()) => ???
 */
function sumSquares(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

// =============================================================================
// BOOLEAN AGGREGATIONS
// =============================================================================

/**
 * Return true if pred(x) is true for EVERY element x in list.
 *
 * every(isPositive, 1 -> 2 -> 3) => true
 * every(isPositive, 1 -> -2 -> 3) => false
 * every(isPositive, ()) => ???
 */
function every(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return true if pred(x) is true for ANY element x in list.
 *
 * some(isNegative, 1 -> 2 -> 3) => false
 * some(isNegative, 1 -> -2 -> 3) => true
 * some(isNegative, ()) => ???
 */
function some(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return true if pred(x) is false for ALL elements x in list.
 *
 * none(isNegative, 1 -> 2 -> 3) => true
 * none(isNegative, 1 -> -2 -> 3) => false
 */
function none(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return true if val is in list.
 *
 * contains(2, 1 -> 2 -> 3) => true
 * contains(5, 1 -> 2 -> 3) => false
 * contains(5, ()) => ???
 */
function contains(val, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return true if all elements in list are equal to each other.
 *
 * allEqual(5 -> 5 -> 5) => true
 * allEqual(5 -> 5 -> 3) => false
 * allEqual(()) => ???
 * allEqual(42) => true (single element)
 */
function allEqual(list) {
  if (isEmpty(list)) {
    return _____;
  }

  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);
  let second = rest.value;

  return _____;
}

/**
 * Return true if list is sorted in ascending order.
 *
 * isSorted(1 -> 2 -> 3) => true
 * isSorted(1 -> 3 -> 2) => false
 * isSorted(()) => ???
 * isSorted(42) => true (single element)
 */
function isSorted(list) {
  if (isEmpty(list)) {
    return _____;
  }

  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);
  let second = rest.value;

  return _____;
}

// =============================================================================
// COUNTING & SEARCHING
// =============================================================================

/**
 * Count elements where pred(x) is true.
 *
 * countIf(isEven, 1 -> 2 -> 3 -> 4) => 2
 * countIf(isEven, ()) => ???
 */
function countIf(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Count how many times val appears in list.
 *
 * countOccurrences(2, 1 -> 2 -> 2 -> 3) => 2
 * countOccurrences(5, 1 -> 2 -> 3) => 0
 */
function countOccurrences(val, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return first element where pred(x) is true, or null if not found.
 *
 * find(isEven, 1 -> 3 -> 4 -> 6) => 4
 * find(isEven, 1 -> 3 -> 5) => null
 */
function find(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return index of first occurrence of val, or -1 if not found.
 *
 * indexOf(3, 1 -> 2 -> 3 -> 4) => 2
 * indexOf(5, 1 -> 2 -> 3) => -1
 */
function indexOf(val, list) {
  function helper(list, idx) {
    if (isEmpty(list)) {
      return _____;
    }

    let [first, rest] = unprepend(list);

    return _____;
  }

  return helper(list, 0);
}

/**
 * Return index of first element where pred(x) is true, or -1 if not found.
 *
 * findIndex(isEven, 1 -> 3 -> 4 -> 6) => 2
 * findIndex(isEven, 1 -> 3 -> 5) => -1
 */
function findIndex(pred, list) {
  function helper(list, idx) {
    if (isEmpty(list)) {
      return _____;
    }

    let [first, rest] = unprepend(list);

    return _____;
  }

  return helper(list, 0);
}

// =============================================================================
// ELEMENT ACCESS
// =============================================================================

/**
 * Return the last element of a non-empty list.
 *
 * last(1 -> 2 -> 3) => 3
 * last(42) => 42
 */
function last(list) {
  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return the element at index n (0-indexed).
 *
 * nth(0, a -> b -> c) => a
 * nth(2, a -> b -> c) => c
 */
function nth(n, list) {
  if (n === 0) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return a new list with the first n elements.
 *
 * take(2, 1 -> 2 -> 3 -> 4) => 1 -> 2
 * take(0, 1 -> 2 -> 3) => ()
 * take(5, 1 -> 2) => 1 -> 2
 */
function take(n, list) {
  if (n === 0 || isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return a new list without the first n elements.
 *
 * drop(2, 1 -> 2 -> 3 -> 4) => 3 -> 4
 * drop(0, 1 -> 2 -> 3) => 1 -> 2 -> 3
 * drop(5, 1 -> 2) => ()
 */
function drop(n, list) {
  if (n === 0 || isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return elements from the front while pred(x) is true.
 *
 * takeWhile(isPositive, 1 -> 2 -> -3 -> 4) => 1 -> 2
 * takeWhile(isPositive, -1 -> 2 -> 3) => ()
 */
function takeWhile(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Drop elements from the front while pred(x) is true.
 *
 * dropWhile(isPositive, 1 -> 2 -> -3 -> 4) => -3 -> 4
 * dropWhile(isPositive, -1 -> 2 -> 3) => -1 -> 2 -> 3
 */
function dropWhile(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return all elements except the last one.
 *
 * init(1 -> 2 -> 3) => 1 -> 2
 * init(42) => ()
 */
function init(list) {
  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

// =============================================================================
// LIST TRANSFORMATIONS
// =============================================================================

/**
 * Apply fn to every element, return new list of results.
 *
 * mapList(double, 1 -> 2 -> 3) => 2 -> 4 -> 6
 * mapList(double, ()) => ???
 */
function mapList(fn, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return new list with only elements where pred(x) is true.
 *
 * filterList(isEven, 1 -> 2 -> 3 -> 4) => 2 -> 4
 * filterList(isEven, 1 -> 3 -> 5) => ()
 */
function filterList(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return a new list with elements in reverse order.
 *
 * reverse(1 -> 2 -> 3) => 3 -> 2 -> 1
 * reverse(()) => ???
 */
function reverse(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return new list with val added at the END.
 *
 * append(99, 1 -> 2 -> 3) => 1 -> 2 -> 3 -> 99
 * append(99, ()) => ???
 */
function append(val, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Put sep between each element.
 *
 * intersperse(0, 1 -> 2 -> 3) => 1 -> 0 -> 2 -> 0 -> 3
 * intersperse(0, 1) => 1
 * intersperse(0, ()) => ???
 */
function intersperse(sep, list) {
  if (isEmpty(list)) {
    return _____;
  }

  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Remove CONSECUTIVE duplicates.
 *
 * dedupe(1 -> 1 -> 2 -> 2 -> 1) => 1 -> 2 -> 1
 * dedupe(1 -> 2 -> 3) => 1 -> 2 -> 3
 * dedupe(()) => ???
 */
function dedupe(list) {
  if (isEmpty(list)) {
    return _____;
  }

  if (isEmpty(list.next)) {
    return _____;
  }

  let [first, rest] = unprepend(list);
  let second = rest.value;

  return _____;
}

/**
 * Remove ALL duplicates, keeping first occurrence.
 *
 * unique(1 -> 2 -> 1 -> 3 -> 2) => 1 -> 2 -> 3
 * unique(()) => ???
 */
function unique(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Remove all null/undefined values.
 *
 * compact(1 -> null -> 2 -> undefined -> 3) => 1 -> 2 -> 3
 * compact(()) => ???
 */
function compact(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Remove ALL occurrences of val.
 *
 * without(2, 1 -> 2 -> 3 -> 2 -> 4) => 1 -> 3 -> 4
 * without(5, 1 -> 2 -> 3) => 1 -> 2 -> 3
 */
function without(val, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Replace all occurrences of old with newVal.
 *
 * replace(2, 99, 1 -> 2 -> 3 -> 2) => 1 -> 99 -> 3 -> 99
 * replace(5, 99, 1 -> 2 -> 3) => 1 -> 2 -> 3
 */
function replace(old, newVal, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Flatten one level of nesting (list of lists -> list).
 *
 * flatten((1 -> 2) -> (3) -> (4 -> 5)) => 1 -> 2 -> 3 -> 4 -> 5
 * flatten(() -> (1 -> 2) -> ()) => 1 -> 2
 * flatten(()) => ???
 */
function flatten(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Map fn over list, then flatten the result.
 *
 * If fn returns a list for each element, flatMap concatenates them.
 *
 * flatMap(x => Node.fromArray([x, x]), 1 -> 2) => 1 -> 1 -> 2 -> 2
 */
function flatMap(fn, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

// =============================================================================
// COMBINING TWO LISTS
// =============================================================================

/**
 * Concatenate two lists.
 *
 * concat(1 -> 2, 3 -> 4) => 1 -> 2 -> 3 -> 4
 * concat((), 1 -> 2) => 1 -> 2
 * concat(1 -> 2, ()) => 1 -> 2
 *
 * Note: Recurse on list1, list2 stays fixed.
 */
function concat(list1, list2) {
  if (isEmpty(list1)) {
    return _____;
  }

  let [first, rest] = unprepend(list1);

  return _____;
}

/**
 * Combine two lists into list of pairs, stopping at shorter list.
 *
 * zipLists(1 -> 2 -> 3, a -> b) => [1,a] -> [2,b]
 * zipLists((), 1 -> 2) => ???
 */
function zipLists(list1, list2) {
  if (isEmpty(list1) || isEmpty(list2)) {
    return _____;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return _____;
}

/**
 * Combine two lists using fn, stopping at shorter list.
 *
 * zipWith(add, 1 -> 2 -> 3, 10 -> 20) => 11 -> 22
 */
function zipWith(fn, list1, list2) {
  if (isEmpty(list1) || isEmpty(list2)) {
    return _____;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return _____;
}

/**
 * Alternate elements from two lists.
 *
 * interleave(1 -> 2 -> 3, a -> b -> c) => 1 -> a -> 2 -> b -> 3 -> c
 * interleave(1 -> 2, a) => 1 -> a -> 2
 * interleave((), a -> b) => a -> b
 */
function interleave(list1, list2) {
  if (isEmpty(list1)) {
    return _____;
  }

  let [first, rest] = unprepend(list1);

  return _____;
}

/**
 * Merge two SORTED lists into one sorted list.
 *
 * merge(1 -> 3 -> 5, 2 -> 4 -> 6) => 1 -> 2 -> 3 -> 4 -> 5 -> 6
 * merge(1 -> 2, ()) => 1 -> 2
 */
function merge(list1, list2) {
  if (isEmpty(list1)) {
    return _____;
  }

  if (isEmpty(list2)) {
    return _____;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return _____;
}

// =============================================================================
// PARTITIONING
// =============================================================================

/**
 * Split list into [elements where pred is true, elements where pred is false].
 *
 * partition(isEven, 1 -> 2 -> 3 -> 4) => [2 -> 4, 1 -> 3]
 * partition(isEven, ()) => ???
 */
function partition(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);
  let [trues, falses] = partition(pred, rest);

  return _____;
}

/**
 * Split list at index n into [first n elements, rest].
 *
 * splitAt(2, 1 -> 2 -> 3 -> 4) => [1 -> 2, 3 -> 4]
 * splitAt(0, 1 -> 2 -> 3) => [(), 1 -> 2 -> 3]
 */
function splitAt(n, list) {
  if (n === 0 || isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);
  let [left, right] = splitAt(n - 1, rest);

  return _____;
}

/**
 * Split where predicate first becomes false.
 *
 * span(isPositive, 1 -> 2 -> -3 -> 4) => [1 -> 2, -3 -> 4]
 * span(isPositive, -1 -> 2 -> 3) => [(), -1 -> 2 -> 3]
 *
 * Like [takeWhile(pred), dropWhile(pred)] but more efficient.
 */
function span(pred, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);
  if (!pred(first)) {
    return _____;
  }

  let [left, right] = span(pred, rest);

  return _____;
}

/**
 * Group elements into sublists of size n.
 *
 * chunksOf(2, 1 -> 2 -> 3 -> 4 -> 5) => (1 -> 2) -> (3 -> 4) -> (5)
 * chunksOf(3, 1 -> 2) => (1 -> 2)
 */
function chunksOf(n, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let chunk = take(n, list);
  let remaining = drop(n, list);

  return _____;
}

// =============================================================================
// STRUCTURAL / META
// =============================================================================

/**
 * Pair each element with its index.
 *
 * indexed(a -> b -> c) => [0,a] -> [1,b] -> [2,c]
 * indexed(()) => ???
 */
function indexed(list) {
  function helper(list, idx) {
    if (isEmpty(list)) {
      return _____;
    }

    let [first, rest] = unprepend(list);

    return _____;
  }

  return helper(list, 0);
}

/**
 * Return list of all suffixes (tails).
 *
 * tails(1 -> 2 -> 3) => (1 -> 2 -> 3) -> (2 -> 3) -> (3) -> ()
 * tails(()) => ???
 */
function tails(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return list of all prefixes (inits).
 *
 * inits(1 -> 2 -> 3) => () -> (1) -> (1 -> 2) -> (1 -> 2 -> 3)
 * inits(()) => ???
 */
function inits(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

// =============================================================================
// COMPARISONS (TWO LISTS)
// =============================================================================

/**
 * Return true if two lists have the same elements in the same order.
 *
 * equals(1 -> 2 -> 3, 1 -> 2 -> 3) => true
 * equals(1 -> 2, 1 -> 2 -> 3) => false
 * equals((), ()) => ???
 */
function equals(list1, list2) {
  if (isEmpty(list1) && isEmpty(list2)) {
    return _____;
  }

  if (isEmpty(list1) || isEmpty(list2)) {
    return _____;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return _____;
}

/**
 * Return true if prefix is a prefix of list.
 *
 * isPrefixOf(1 -> 2, 1 -> 2 -> 3) => true
 * isPrefixOf(1 -> 3, 1 -> 2 -> 3) => false
 * isPrefixOf((), anything) => true
 */
function isPrefixOf(prefix, list) {
  if (isEmpty(prefix)) {
    return _____;
  }

  if (isEmpty(list)) {
    return _____;
  }

  let [firstP, restP] = unprepend(prefix);
  let [firstL, restL] = unprepend(list);

  return _____;
}

/**
 * Return the longest common prefix of two lists.
 *
 * commonPrefix(1 -> 2 -> 3, 1 -> 2 -> 5 -> 6) => 1 -> 2
 * commonPrefix(1 -> 2, 3 -> 4) => ()
 */
function commonPrefix(list1, list2) {
  if (isEmpty(list1) || isEmpty(list2)) {
    return _____;
  }

  let [first1, rest1] = unprepend(list1);
  let [first2, rest2] = unprepend(list2);

  return _____;
}

// =============================================================================
// SORTING-ADJACENT
// =============================================================================

/**
 * Insert val into an already-sorted list, maintaining sort order.
 *
 * insertSorted(3, 1 -> 2 -> 4 -> 5) => 1 -> 2 -> 3 -> 4 -> 5
 * insertSorted(0, 1 -> 2 -> 3) => 0 -> 1 -> 2 -> 3
 * insertSorted(9, 1 -> 2 -> 3) => 1 -> 2 -> 3 -> 9
 */
function insertSorted(val, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Sort list using insertion sort.
 *
 * insertionSort(3 -> 1 -> 4 -> 1 -> 5) => 1 -> 1 -> 3 -> 4 -> 5
 */
function insertionSort(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

// =============================================================================
// FOLD (THE TEMPLATE REVEALED)
// =============================================================================

/**
 * Right fold: foldr(f, z, [a, b, c]) = f(a, f(b, f(c, z)))
 *
 * This IS the template. Every function above can be written as a foldr.
 */
function foldr(fn, acc, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Left fold: foldl(f, z, [a, b, c]) = f(f(f(z, a), b), c)
 *
 * Processes left-to-right instead of right-to-left.
 */
function foldl(fn, acc, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

// =============================================================================
// HELPER PREDICATES (for testing)
// =============================================================================

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

function isPositive(n) {
  return n > 0;
}

function isNegative(n) {
  return n < 0;
}

function double(n) {
  return n * 2;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// =============================================================================
// TEST HARNESS
// =============================================================================

if (require.main === module) {
  // Create some test lists
  let nums = Node.fromArray([10, 20, 30, -1]);
  let nums2 = Node.fromArray([1, 2, 3, 4, 5]);
  let empty = EMPTY_LIST;
  let single = Node.fromArray([42]);
  let withDupes = Node.fromArray([1, 1, 2, 2, 2, 3, 1]);
  let sortedList = Node.fromArray([1, 3, 5, 7]);
  let sortedList2 = Node.fromArray([2, 4, 6, 8]);

  console.log('=== Test Lists ===');
  console.log(`nums:       ${nums}`);
  console.log(`nums2:      ${nums2}`);
  console.log(`empty:      ${empty}`);
  console.log(`single:     ${single}`);
  console.log(`withDupes:  ${withDupes}`);
  console.log();

  console.log('=== Example (sum) ===');
  console.log(`sumList(nums): ${sumList(nums)}`);
  console.log();

  // Uncomment these as you implement each function:

  // console.log('=== Numeric Aggregations ===');
  // console.log(`product(nums2):     ${product(nums2)}`);
  // console.log(`largest(nums):      ${largest(nums)}`);
  // console.log(`smallest(nums):     ${smallest(nums)}`);
  // console.log(`length(nums):       ${length(nums)}`);
  // console.log(`sumSquares(nums2):  ${sumSquares(nums2)}`);
  // console.log();

  // console.log('=== Boolean Aggregations ===');
  // console.log(`every(isPositive, nums2): ${every(isPositive, nums2)}`);
  // console.log(`every(isPositive, nums):  ${every(isPositive, nums)}`);
  // console.log(`some(isNegative, nums):   ${some(isNegative, nums)}`);
  // console.log(`contains(20, nums):       ${contains(20, nums)}`);
  // console.log(`contains(99, nums):       ${contains(99, nums)}`);
  // console.log();

  // console.log('=== List Transformations ===');
  // console.log(`mapList(double, nums2):      ${mapList(double, nums2)}`);
  // console.log(`filterList(isEven, nums2):   ${filterList(isEven, nums2)}`);
  // console.log(`reverse(nums):               ${reverse(nums)}`);
  // console.log();

  // console.log('=== Combining Two Lists ===');
  // console.log(`concat(Node.fromArray([1,2]), Node.fromArray([3,4])): ${concat(Node.fromArray([1,2]), Node.fromArray([3,4]))}`);
  // console.log(`merge(sortedList, sortedList2): ${merge(sortedList, sortedList2)}`);
  // console.log();

  // console.log('=== Fold ===');
  // console.log(`foldr(add, 0, nums2):      ${foldr(add, 0, nums2)}`);
  // console.log(`foldr(multiply, 1, nums2): ${foldr(multiply, 1, nums2)}`);
  // console.log(`foldl(add, 0, nums2):      ${foldl(add, 0, nums2)}`);
}

// =============================================================================
// EXPORTS
// =============================================================================

module.exports = {
  EMPTY_LIST,
  Node,
  isEmpty,
  prepend,
  unprepend,
  listToString,
  sumList,
  product,
  largest,
  smallest,
  length,
  sumSquares,
  every,
  some,
  none,
  contains,
  allEqual,
  isSorted,
  countIf,
  countOccurrences,
  find,
  indexOf,
  findIndex,
  last,
  nth,
  take,
  drop,
  takeWhile,
  dropWhile,
  init,
  mapList,
  filterList,
  reverse,
  append,
  intersperse,
  dedupe,
  unique,
  compact,
  without,
  replace,
  flatten,
  flatMap,
  concat,
  zipLists,
  zipWith,
  interleave,
  merge,
  partition,
  splitAt,
  span,
  chunksOf,
  indexed,
  tails,
  inits,
  equals,
  isPrefixOf,
  commonPrefix,
  insertSorted,
  insertionSort,
  foldr,
  foldl,
  isEven,
  isOdd,
  isPositive,
  isNegative,
  double,
  add,
  multiply,
};
